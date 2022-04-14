import React, { FC, useRef, useState } from 'react';
import { Button, Col, Form, Overlay, Row, Tooltip } from 'react-bootstrap';
import { supportedGames } from '../games/titles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import JoinBtn from './JoinBtn';

type LinkParams = {
    protocol: string,
    ip: string,
    port: string,
    copied: boolean
}

const LinkBuilder: FC = () => {
    const [link, setLink] = useState<LinkParams>( { protocol: '', ip: '', port: '', copied: false });
    const target = useRef(null);

    const gameOptions: JSX.Element[] = [];
    for (const key in supportedGames) {
        const game = supportedGames[key];
        gameOptions.push(<option key={key} value={key}>{game.label}</option>);
    }
    
    return (
        <>
            <h1 className="display-6">Make it easy for anyone to join your server</h1>
            <p className={'mw-70'}>Select a game and enter the server&apos;s ip and port. We will generate a link for you that anyone can use to join the server in just 2 clicks.</p>
            <Form className="my-3 mx-3">
                <Row>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Select id='gameSelect' className='bg-dark text-white' size='lg' defaultValue='Select game' required onChange={e => setLink({ ...link, protocol: e.target.value, copied: false })}>
                                <option disabled>Select game</option>
                                {gameOptions}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} className={'mb-3'}>
                        <Form.Group>
                            <Form.Control className='bg-dark text-white' size='lg' type='text' placeholder='Enter server IP' onChange={e => setLink({ ...link, ip: e.target.value, copied: false })}/>
                        </Form.Group>
                    </Col>
                    <Col md={5} className={'mb-3'}>
                        <Form.Group>
                            <Form.Control className='bg-dark text-white' size='lg' type='text' placeholder='Enter server port' onChange={e => setLink({ ...link, port: e.target.value, copied: false })}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control className='bg-dark text-light' size='lg' type='text' placeholder='bf2://135.125.56.26:16469' value={buildGameUrl(link)} readOnly />
                    </Col>
                </Row>
            </Form>

            <div>
                <CopyToClipboard text={buildJoinMeLink(link)} onCopy={() => setLink({ ...link, copied: true })}>
                    <Button ref={target} className='mx-3' variant="outline-primary" size="lg" disabled={!linkParamsValid(link)}>Copy joinme.click link</Button>
                </CopyToClipboard>
                <Overlay target={target.current} show={link.copied} placement="right">
                    {(props) => (
                        <Tooltip {...props}>
                            Copied!
                        </Tooltip>
                    )}
                </Overlay>

                <JoinBtn className='mx-3' protocol={link.protocol} ip={link.ip} port={link.port} disabled={!linkParamsValid(link)} />
            </div>
        </>
    );
};

function linkParamsValid({ protocol, ip, port }: LinkParams): boolean {
    return protocol in supportedGames && isValidIP(ip) && isValidPort(port);
}

function isValidIP(ip: string): boolean {
    // regex from: https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses/26445549#26445549
    return ip.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/gi) != null;
}

function isValidPort(port: string): boolean {
    const numeric = parseInt(port);
    return numeric >= 1 && numeric <= 65535;
}

function buildGameUrl({ protocol, ip, port }: LinkParams): string {
    let url = '';
    if (protocol) {
        url += `${protocol}://`;
    }
    if (ip) {
        url += isValidIP(ip) ? ip : 'invalid ip address';
    }
    if (port) {
        url += `:${isValidPort(port) ? port : 'invalid port'}`;
    }
    return url;
}

function buildJoinMeLink(link: LinkParams): string {
    if (linkParamsValid(link)) {
        return `https://joinme.click/g/${link.protocol}/${link.ip}:${link.port}`;
    }
    return '';
}

export default LinkBuilder;
