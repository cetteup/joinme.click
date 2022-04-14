import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';

interface JoinBtnProps {
    protocol: string
    ip: string
    port: string
    className?: string
    disabled?: boolean
}

const JoinBtn: FC<JoinBtnProps> = ({ protocol, ip, port, className , disabled }) => {
    const joinUrl = `${protocol}://${ip}:${port}`;
    return (
        <Button className={className} variant="outline-primary" size="lg" href={joinUrl} disabled={disabled}>Launch game and join</Button>
    );
};

export default JoinBtn;
