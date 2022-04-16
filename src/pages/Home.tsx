import React, { FC, useRef, useState } from 'react';
import { Button, Col, Form, Overlay, Row, Tooltip } from 'react-bootstrap';
import { GameConfig, supportedGames } from '../games/titles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import JoinBtn from '../components/JoinBtn';
import DownloadModal from '../components/DownloadModal';

type LinkParams = {
    protocol?: string,
    host?: string,
    port?: string,
    copied: boolean
    gameConfig?: GameConfig,
}

const Home: FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [link, setLink] = useState<LinkParams>( { copied: false });
    const target = useRef(null);

    const gameOptions: JSX.Element[] = [];
    for (const key in supportedGames) {
        const game = supportedGames[key];
        gameOptions.push(<option key={key} value={key}>{game.label}</option>);
    }
    
    return (
        <>
            <h1 className="display-6">Make it easy for anyone to join your server</h1>
            <p className={'mw-70'}>Select a game and enter the server&apos;s ip/game identifier (and port, if required). We will generate a link for you that anyone can use to join the server in just 2 clicks.</p>
            <Form className="my-3 mx-3">
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Select id='gameSelect' className='bg-dark text-white' size='lg' defaultValue='Select game' required onChange={e => setLink({ ...link, protocol: e.target.value, copied: false, gameConfig: supportedGames[e.target.value] })}>
                                <option disabled>Select game</option>
                                {gameOptions}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {
                    (!link.gameConfig || link.gameConfig.urlType == 'ip-port') &&
                    <Row>
                        <Col md={7} className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='bg-dark text-white' size='lg' type='text' placeholder='Enter server IP' onChange={e => setLink({ ...link, host: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                        <Col md={5} className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='bg-dark text-white' size='lg' type='text' placeholder='Enter server port' onChange={e => setLink({ ...link, port: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                    </Row>
                }
                {
                    (link.gameConfig && link.gameConfig.urlType == 'gameId') &&
                    <Row>
                        <Col className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='bg-dark text-white' size='lg' type='text' placeholder='Enter server game ID' onChange={e => setLink({ ...link, host: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col>
                        <Form.Control className='bg-dark text-light' size='lg' type='text' placeholder='bf2://135.125.56.26:16469' value={buildGameUrl(link)} readOnly />
                    </Col>
                </Row>
            </Form>

            <div>
                <CopyToClipboard text={buildJoinMeLink(link)} onCopy={() => setLink({ ...link, copied: true })}>
                    <Button ref={target} className='m-2' variant="outline-primary" size="lg" disabled={!linkParamsValid(link)}>Copy joinme.click link</Button>
                </CopyToClipboard>
                <Overlay target={target.current} show={link.copied} placement="left">
                    {(props) => (
                        <Tooltip {...props}>
                            Copied!
                        </Tooltip>
                    )}
                </Overlay>

                <JoinBtn className='m-2' protocol={link.protocol} host={link.host} port={link.port} disabled={!linkParamsValid(link)} />

                {
                    link.gameConfig?.requiresLauncher &&
                    <Button className="m-2" variant="outline-secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
                }
            </div>

            {
                (link.gameConfig?.requiresLauncher && link.gameConfig?.launcher || link.gameConfig?.hint) &&
                <div className="mt-3">
                    <p className="text-white-50">
                        {
                            link.gameConfig.requiresLauncher && link.gameConfig.launcher &&
                            <small>{link.gameConfig.label} requires launcher version {link.gameConfig.minLauncherVersion} or later.
                                You can determine your launcher version by looking at the details tab of the {link.gameConfig.launcher.filename} file properties.</small>
                        }
                        {
                            link.gameConfig.hint
                        }
                    </p>
                </div>
            }

            {
                link.gameConfig?.requiresLauncher && link.gameConfig?.launcher &&
                <DownloadModal
                    title={'Download the launcher'}
                    protocol={link.gameConfig.protocol}
                    sourceURL={link.gameConfig.launcher.sourceURL}
                    sourceProvider={link.gameConfig.launcher.sourceProvider}
                    downloadURL={link.gameConfig.launcher.downloadURL}
                    downloadChecksums={link.gameConfig.launcher.checksums}
                    filename={link.gameConfig.launcher.filename}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }
        </>
    );
};

function linkParamsValid({ protocol, host, port, gameConfig }: LinkParams): boolean {
    if (!protocol || !(protocol in supportedGames) || !host) {
        return false;
    }

    switch (gameConfig?.urlType) {
        case 'gameId':
            return isValidGameID(host);
        default:
            return isValidIP(host) && !!port && isValidPort(port);
    }
}

function isValidIP(ip: string): boolean {
    // regex from: https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses/26445549#26445549
    return ip.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/gi) != null;
}

function isValidPort(port: string): boolean {
    const numeric = parseInt(port);
    return numeric >= 1 && numeric <= 65535;
}

function isValidGameID(gameID: string): boolean {
    return gameID.match(/^\d+$/gi) != null;
}

function buildGameUrl({ protocol, host, port, gameConfig }: LinkParams): string {
    let url = '';
    if (protocol) {
        url += `${protocol}://`;
    }
    if (host && gameConfig?.urlType == 'ip-port') {
        url += isValidIP(host) ? host : 'invalid ip address';
    }
    if (port && gameConfig?.urlType == 'ip-port') {
        url += `:${isValidPort(port) ? port : 'invalid port'}`;
    }
    if (host && gameConfig?.urlType == 'gameId') {
        url += isValidGameID(host) ? host : 'invalid game id';
    }
    return url;
}

function buildJoinMeLink(link: LinkParams): string {
    if (!linkParamsValid(link)) {
        return '';
    }

    let url = `https://joinme.click/g/${link.protocol}/${link.host}`;
    if (link.gameConfig?.urlType == 'ip-port' && link.port) {
        url += `:${link.port}`;
    }
    return url;
}

export default Home;
