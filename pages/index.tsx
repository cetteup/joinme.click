import React, { FC, useRef, useState } from 'react';
import { Button, Col, Form, Overlay, Row, Tooltip } from 'react-bootstrap';
import { GameMod, supportedGames } from '../lib/titles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import JoinBtn from '../components/JoinBtn';
import DownloadModal from '../components/DownloadModal';
import { buildGameUrl, buildJoinMeLink, LinkParams, linkParamsValid } from '../lib/util';

type LinkState = LinkParams & {
    copied: boolean
}

const Index: FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [link, setLink] = useState<LinkState>( { copied: false });
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
                {
                    link.game?.alert
                }
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Select id='gameSelect' className='text-white' size='lg' defaultValue='Select game' required onChange={e => setLink({ ...link, game: supportedGames[e.target.value], query: undefined, copied: false })}>
                                <option disabled>Select game</option>
                                {gameOptions}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {
                        link.game?.mods?.length &&
                        <Col lg={5}>
                            <Form.Group className='mb-3'>
                                <Form.Select id='modSelect' className='text-white' size='lg' defaultValue='Select mod' onChange={e => setLink({ ...link, query: { ...link.query, mod: e.target.value }, copied: false })}>
                                    <option value={''}>Select mod (optional)</option>
                                    {getModOptions(link.game.mods.sort((a, b) => a.label.localeCompare(b.label)))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    }
                </Row>
                {
                    (!link.game || link.game.urlType == 'ip-port') &&
                    <Row>
                        <Col md={7} className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='text-white' size='lg' type='text' placeholder='Enter server IP' onChange={e => setLink({ ...link, host: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                        <Col md={5} className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='text-white' size='lg' type='text' placeholder='Enter server port' onChange={e => setLink({ ...link, port: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                    </Row>
                }
                {
                    (link.game && link.game.urlType == 'gameId') &&
                    <Row>
                        <Col className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='text-white' size='lg' type='text' placeholder='Enter server game ID' onChange={e => setLink({ ...link, host: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                    </Row>
                }
                {
                    (link.game && link.game.urlType == 'guid') &&
                    <Row>
                        <Col className={'mb-3'}>
                            <Form.Group>
                                <Form.Control className='text-white' size='lg' type='text' placeholder='Enter server GUID' onChange={e => setLink({ ...link, host: e.target.value, copied: false })}/>
                            </Form.Group>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col>
                        <Form.Control className='text-light' size='lg' type='text' placeholder='bf2://135.125.56.26:16469' value={buildGameUrl(link)} readOnly />
                    </Col>
                </Row>
            </Form>

            <div>
                <CopyToClipboard text={buildJoinMeLink(link)} onCopy={() => setLink({ ...link, copied: true })}>
                    <Button
                        ref={target}
                        className='m-2'
                        variant={linkParamsValid(link) ? 'primary' : 'outline-primary'}
                        size="lg"
                        disabled={!linkParamsValid(link)}
                        data-umami-event={'copy-link'}
                        data-umami-event-game={link.game?.protocol}
                    >
                        Copy joinme.click link
                    </Button>
                </CopyToClipboard>
                <Overlay target={target.current} show={link.copied} placement="left">
                    {(props) => (
                        <Tooltip {...props}>
                            Copied!
                        </Tooltip>
                    )}
                </Overlay>

                <JoinBtn className='m-2' linkParams={link} disabled={!linkParamsValid(link)} />

                {
                    link.game?.requiresLauncher &&
                    <Button className="m-2" variant="secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
                }
            </div>

            {
                (link.game?.requiresLauncher && link.game?.launcher || link.game?.hint) &&
                <div className="mt-3 mx-auto" style={{ maxWidth: '680px' }}>
                    <p className="text-white-50">
                        {
                            link.game.requiresLauncher && link.game.launcher &&
                            <small>{link.game.label} requires launcher version {link.game.minLauncherVersion} or later.
                                You can determine your launcher version by looking at the details tab of the {link.game.launcher.filename} file properties.</small>
                        }
                        {
                            link.game.hint
                        }
                    </p>
                </div>
            }

            {
                link.game?.requiresLauncher && link.game?.launcher &&
                <DownloadModal
                    title={`Download the launcher (${link.game.launcher.currentVersion})`}
                    game={link.game.label}
                    protocol={link.game.protocol}
                    sourceURL={link.game.launcher.sourceURL}
                    sourceProvider={link.game.launcher.sourceProvider}
                    downloadURL={link.game.launcher.downloadURL}
                    downloadChecksums={link.game.launcher.checksums}
                    filename={link.game.launcher.filename}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }
        </>
    );
};

function getModOptions(mods: GameMod[]): JSX.Element[] {
    const modOptions: JSX.Element[] = [];
    for (const mod of mods) {
        modOptions.push(<option key={mod.slug} value={mod.slug}>{mod.label}</option>);
    }

    return modOptions;
}

export default Index;
