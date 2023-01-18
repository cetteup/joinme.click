import React, { FC } from 'react';
import JoinBtn from '../../../components/JoinBtn';
import { Button } from 'react-bootstrap';
import DownloadModal from '../../../components/DownloadModal';
import { GameConfig, supportedGames } from '../../../lib/titles';
import AutoJoinToggle from '../../../components/AutoJoinToggle';
import Head from 'next/head';
import { GetServerSidePropsContext, GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';
import { buildFallbackServerName, fetchServerName } from '../../../lib/getServerName';
import { getGameLabel, LinkParams, linkParamsValid, setIfDefined } from '../../../lib/util';

type JoinGameProps = {
    game?: string
    gameConfig?: GameConfig
    host?: string
    port?: string
    modSlug?: string
    serverName?: string
}

export const config = {
    runtime: 'experimental-edge',
};

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<JoinGameProps>> {
    const props: JoinGameProps = {};
    const { query } = context;
    const { game, identifier, mod: modSlug } = query;
    if (Array.isArray(game) || Array.isArray(identifier) || Array.isArray(modSlug)) {
        return {
            props
        };
    }

    setIfDefined(props, 'game', game);
    setIfDefined(props, 'modSlug', modSlug);
    if (!game || !identifier) {
        return {
            props
        };
    }

    const [host, port] = identifier.split(':');
    setIfDefined(props, 'host', host);
    setIfDefined(props, 'port', port);

    const gameConfig = supportedGames[game];
    setIfDefined(props, 'gameConfig', gameConfig);
    if (!gameConfig) {
        return {
            props
        };
    }

    if (!host || (!port && gameConfig.urlType == 'ip-port')) {
        return {
            props
        };
    }

    let serverName: string;
    try {
        serverName = await fetchServerName(gameConfig, host, port);
    } catch {
        serverName = buildFallbackServerName(gameConfig, host, port);
    }

    return {
        props: {
            ...props,
            serverName
        }
    };
}

const JoinGame: FC<JoinGameProps> = ({ game, gameConfig, host, port, modSlug, serverName }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [modalShow, setModalShow] = React.useState(false);

    if (!game || !host) {
        return (
            <h1 className="text-white-50 display-6">Whoops, required parameters seem to be missing</h1>
        );
    }

    if (!gameConfig) {
        return (
            <h1 className="text-white-50 display-6"><q>{game}</q> is currently not supported</h1>
        );
    }

    if (!port && gameConfig.urlType == 'ip-port') {
        return (
            <h1 className="text-white-50 display-6">Whoops, required parameters seem to be missing</h1>
        );
    }

    const linkParams: LinkParams = {
        game: gameConfig,
        host: host,
        port: port,
        query: {
            mod: modSlug
        }
    };
    if (!linkParamsValid(linkParams)) {
        return (
            <h1 className="text-white-50 display-6">Whoops, looks like your link is not valid</h1>
        );
    }

    if (modSlug && !gameConfig.mods) {
        return (
            <h1 className="text-white-50 display-6">{gameConfig.label} does not currently support mods</h1>
        );
    }

    const mod = gameConfig.mods?.find((m) => m.slug == modSlug);
    if (modSlug && gameConfig.mods && !mod) {
        return (
            <h1 className="text-white-50 display-6"><q>{modSlug}</q> is not a mod currently supported for {gameConfig.label}</h1>
        );
    }

    return (
        <>
            <Head>
                <title>{`Join ${serverName}, a ${getGameLabel(gameConfig, modSlug)} server`}</title>
            </Head>
            <h1 className="display-6">You have been invited to join <span className={'text-primary'}>{serverName}</span>, a <em>{getGameLabel(gameConfig, modSlug)}</em> server</h1>
            {
                mod && !mod.isXpack &&
                <small className={'text-white-50'}>{mod.label} is a {gameConfig.label} mod</small>
            }
            {
                gameConfig.alert &&
                <div className={'mt-3'}>{gameConfig.alert}</div>
            }
            <div>
                <JoinBtn className="mt-3 mx-3" linkParams={linkParams} />
                {
                    gameConfig.requiresLauncher &&
                    <Button className="mt-3 mx-3" variant="outline-secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
                }
            </div>
            <div className={'mt-3'} style={{ display: 'inline-block' }}>
                <AutoJoinToggle linkParams={linkParams} />
            </div>
            {
                (gameConfig.requiresLauncher && gameConfig.launcher || gameConfig.hint) &&
                <div className="mt-3 mx-auto" style={{ maxWidth: '600px' }}>
                    <p className="text-white-50">
                        {
                            gameConfig.requiresLauncher && gameConfig.launcher &&
                            <small>{gameConfig.label} requires launcher version {gameConfig.minLauncherVersion} or later.
                                You can determine your launcher version by looking at the details tab of the {gameConfig.launcher.filename} file properties.</small>
                        }
                        {
                            gameConfig.hint
                        }
                    </p>
                </div>
            }

            {
                gameConfig.requiresLauncher && gameConfig.launcher &&
                <DownloadModal
                    title={`Download the launcher (${gameConfig.launcher.currentVersion})`}
                    protocol={gameConfig.protocol}
                    sourceURL={gameConfig.launcher.sourceURL}
                    sourceProvider={gameConfig.launcher.sourceProvider}
                    downloadURL={gameConfig.launcher.downloadURL}
                    downloadChecksums={gameConfig.launcher.checksums}
                    filename={gameConfig.launcher.filename}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }
        </>
    );
};

export default JoinGame;
