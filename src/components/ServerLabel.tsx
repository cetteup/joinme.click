import React, { FC } from 'react';
import { GameConfig } from '../games/titles';
import { useQuery } from 'react-query';

interface ServerLabelProps {
    gameConfig: GameConfig
    ip: string
    port: string
}

const ServerLabel: FC<ServerLabelProps & React.HTMLAttributes<HTMLSpanElement>> = ({ gameConfig, ip, port , ...props }) => {
    let label = `${ip}:${port}`;
    if (gameConfig.serverNameSrc == 'bflist' && gameConfig.bflistGame) {
        const game = gameConfig.bflistGame;
        const { isLoading, error, data } = useQuery('serverName', () =>
            fetchServerNameBflist(game, ip, port)
        );

        if (!isLoading && !error) label = data ?? label;
    }

    return (
        <span {...props}>{label}</span>
    );
};

async function fetchServerNameBflist(game: string, ip: string, port: string): Promise<string> {
    const resp = await fetch(`https://api.bflist.io/${game}/v1/servers/${ip}:${port}/name`);
    if (resp.ok) {
        return resp.text();
    }
    else {
        throw Error(resp.statusText);
    }
}

export default ServerLabel;
