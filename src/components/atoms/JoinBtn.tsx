import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { UrlType } from '../../games/titles';

interface JoinBtnProps {
    urlType?: UrlType,
    protocol?: string
    host?: string
    port?: string
    className?: string
    disabled?: boolean
}

const JoinBtn: FC<JoinBtnProps> = ({ urlType, protocol, host, port, className , disabled }) => {
    let joinUrl = `${protocol}://${host}`;
    if (port && urlType == 'ip-port') {
        joinUrl += `:${port}`;
    }
    return (
        <Button className={className} variant="outline-primary" size="lg" href={joinUrl} disabled={disabled}>Launch game and join</Button>
    );
};

export default JoinBtn;
