import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { buildGameUrl, LinkParams } from '../../utils';

type JoinBtnProps = {
    linkParams: LinkParams
    disabled?: boolean
}

const JoinBtn: FC<JoinBtnProps & React.HTMLAttributes<HTMLButtonElement>> = ({ linkParams, disabled, ...props }) => {
    const joinUrl = buildGameUrl(linkParams);
    return (
        <Button variant="outline-primary" size="lg" href={!disabled ? joinUrl : undefined} disabled={disabled} {...props}>Launch game and join</Button>
    );
};

export default JoinBtn;
