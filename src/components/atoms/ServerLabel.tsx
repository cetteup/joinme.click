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

    if (gameConfig.serverNameConfig) {
        const { isLoading, error, data } = useQuery('serverName', () =>
            fetchServerName(gameConfig, host, port)
        , {
            staleTime: Infinity,
            cacheTime: Infinity,
            retry: 2,
            refetchOnWindowFocus: false
        });

        if (!isLoading && !error) label = data ?? label;
    }

    return (
        <span {...props}>{label}</span>
    );
};

async function fetchServerName(gameConfig: GameConfig, host: string, port?: string): Promise<string | undefined> {
    if (!gameConfig.serverNameConfig) {
        return;
    }

    const { provider, gameName, queryPortOffset } = gameConfig.serverNameConfig;
    if (provider == 'bflist' && port) {
        return fetchServerNameBflist(gameName || gameConfig.protocol, host, port);
    }
    else if (provider == 'gametools') {
        return fetchServerNameGametools(gameName || gameConfig.protocol, host);
    }
    else if (provider == 'gamedig-lambda' && port) {
        return fetchServerNameGamedigLambda(
            gameName || gameConfig.protocol,
            host,
            queryPortOffset ? (Number(port) + queryPortOffset).toString() : port
        );
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
        const { name } = await resp.json();
        // Remove colors from name
        // eslint-disable-next-line no-control-regex
        return name.replace(/\x1b...|[\x00-\x1a]/g, '');
    }
    else {
        throw Error(resp.statusText);
    }
}

export default ServerLabel;
