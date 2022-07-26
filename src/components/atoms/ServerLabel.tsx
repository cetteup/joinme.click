import React, { FC } from 'react';
import { GameConfig } from '../../games/titles';
import { useQuery } from 'react-query';

interface ServerLabelProps {
    gameConfig: GameConfig
    host: string
    port?: string
}

const ServerLabel: FC<ServerLabelProps & React.HTMLAttributes<HTMLSpanElement>> = ({ gameConfig, host, port , ...props }) => {
    let label = host;
    if (gameConfig.urlType == 'ip-port' && port) {
        label += `:${port}`;
    }

    if (gameConfig.serverNameSrc) {
        const { isLoading, error, data } = useQuery('serverName', () =>
            fetchServerName(gameConfig, host, port)
        , {
            staleTime: Infinity,
            cacheTime: Infinity,
            retry: 2
        });

        if (!isLoading && !error) label = data ?? label;
    }

    return (
        <span {...props}>{label}</span>
    );
};

async function fetchServerName(gameConfig: GameConfig, host: string, port?: string): Promise<string | undefined> {
    if (gameConfig.serverNameSrc == 'bflist' && gameConfig.bflistGame && port) {
        return fetchServerNameBflist(gameConfig.bflistGame, host, port);
    }
    else if (gameConfig.serverNameSrc == 'gametools') {
        return fetchServerNameGametools(gameConfig.protocol, host);
    }
    else if (gameConfig.serverNameSrc == 'gamedig-lambda' && port) {
        return fetchServerNameGamedigLambda(gameConfig.protocol, host, port);
    }
}

async function fetchServerNameBflist(game: string, ip: string, port: string): Promise<string> {
    const resp = await fetch(`https://server-names.joinme.click/bflist/${game}/${ip}:${port}`);
    if (resp.ok) {
        return resp.text();
    }
    else {
        throw Error(resp.statusText);
    }
}

async function fetchServerNameGametools(game: string, gameID: string): Promise<string> {
    const params = new URLSearchParams({
        gameid: gameID,
        platform: 'pc'
    });
    const resp = await fetch(`https://server-names.joinme.click/gametools/${game}?${params}`);

    if (resp.ok) {
        return (await resp.json()).prefix;
    }
    else {
        throw Error(resp.statusText);
    }
}

async function fetchServerNameGamedigLambda(game: string, host: string, port: string): Promise<string> {
    const params = new URLSearchParams({
        type: game,
        host: host,
        port: port
    });
    const resp = await fetch(`https://server-names.joinme.click/gamedig-lambda?${params}`);
    if (resp.ok) {
        return (await resp.json()).name;
    }
    else {
        throw Error(resp.statusText);
    }
}

export default ServerLabel;
