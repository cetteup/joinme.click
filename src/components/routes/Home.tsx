import React, { FC, useRef, useState } from 'react';
import { Button, Col, Form, Overlay, Row, Tooltip } from 'react-bootstrap';
import { supportedGames } from '../../games/titles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import JoinBtn from '../atoms/JoinBtn';
import DownloadModal from '../atoms/DownloadModal';
import { buildGameUrl, buildJoinMeLink, getModOptions, LinkParams, linkParamsValid } from '../../utils';

type LinkState = LinkParams & {
    copied: boolean
}

const Home: FC = () => {
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
                            <Form.Select id='gameSelect' className='bg-dark text-white' size='lg' defaultValue='Select game' required onChange={e => setLink({ ...link, game: supportedGames[e.target.value], query: undefined, copied: false })}>
                                <option disabled>Select game</option>
                                {gameOptions}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {
                        link.game?.mods?.length &&
                        <Col lg={5}>
                            <Form.Group className='mb-3'>
                                <Form.Select id='modSelect' className='bg-dark text-white' size='lg' defaultValue='Select mod' onChange={e => setLink({ ...link, query: { ...link.query, mod: e.target.value }, copied: false })}>
                                    <option value={''}>Select mod (optional)</option>
                                    {getModOptions(link.game.mods)}
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
                    (link.game && link.game.urlType == 'gameId') &&
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

                <JoinBtn className='m-2' linkParams={link} disabled={!linkParamsValid(link)} />

                {
                    link.game?.requiresLauncher &&
                    <Button className="m-2" variant="outline-secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
                }
            </div>

            {
                (link.game?.requiresLauncher && link.game?.launcher || link.game?.hint) &&
                <div className="mt-3">
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

export default Home;
