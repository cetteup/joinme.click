import React, { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import JoinBtn from '../atoms/JoinBtn';
import { Button } from 'react-bootstrap';
import DownloadModal from '../atoms/DownloadModal';
import { supportedGames } from '../../games/titles';
import ServerLabel from '../atoms/ServerLabel';
import { LinkParams, linkParamsValid } from '../../utils';

const JoinGame: FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { game, identifier } = useParams();
    const { search } = useLocation();

    if (!game || !identifier) {
        return (
            <h1 className="text-white-50 display-6">Whoops, required parameters seem to be missing</h1>
        );
    }

    const config = supportedGames[game];
    if (!config) {
        return (
            <h1 className="text-white-50 display-6"><q>{game}</q> is currently not supported</h1>
        );
    }

    const [host, port] = identifier.split(':');
    if (!host || (!port && config.urlType == 'ip-port')) {
        return (
            <h1 className="text-white-50 display-6">Whoops, required parameters seem to be missing</h1>
        );
    }

    const queryParams = new URLSearchParams(search);
    const linkParams: LinkParams = {
        game: config,
        host: host,
        port: port,
        query: {
            mod: queryParams.get('mod')?.toLowerCase() || undefined
        }
    };
    if (!linkParamsValid(linkParams)) {
        return (
            <h1 className="text-white-50 display-6">Whoops, looks like your link is not valid</h1>
        );
    }

    if (linkParams?.query?.mod && !config.mods) {
        return (
            <h1 className="text-white-50 display-6">{config.label} does not currently support mods</h1>
        );
    }
    if (linkParams?.query?.mod && config.mods && !config.mods.map((m) => m.slug).includes(linkParams.query.mod)) {
        return (
            <h1 className="text-white-50 display-6"><q>{linkParams.query.mod}</q> is not a mod currently supported for {config.label}</h1>
        );
    }

    return (
        <>
            <h1 className="display-6">You have been invited to join <ServerLabel gameConfig={config} host={host} port={port} className={'text-primary'} />, a <em>{config.label}</em> server</h1>
            <div>
                <JoinBtn className="mt-3 mx-3" linkParams={linkParams} />
                {
                    config.requiresLauncher &&
                    <Button className="mt-3 mx-3" variant="outline-secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
                }
            </div>
            {
                (config.requiresLauncher && config.launcher || config.hint) &&
                <div className="mt-3">
                    <p className="text-white-50">
                        {
                            config.requiresLauncher && config.launcher &&
                            <small>{config.label} requires launcher version {config.minLauncherVersion} or later.
                                You can determine your launcher version by looking at the details tab of the {config.launcher.filename} file properties.</small>
                        }
                        {
                            config.hint
                        }
                    </p>
                </div>
            }

            {
                config.requiresLauncher && config.launcher &&
                <DownloadModal
                    title={'Download the launcher'}
                    protocol={config.protocol}
                    sourceURL={config.launcher.sourceURL}
                    sourceProvider={config.launcher.sourceProvider}
                    downloadURL={config.launcher.downloadURL}
                    downloadChecksums={config.launcher.checksums}
                    filename={config.launcher.filename}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }
        </>
    );
};

export default JoinGame;
