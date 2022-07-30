import { GameConfig, GameMod } from './games/titles';
import React from 'react';

export type LinkParams = {
    game?: GameConfig
    host?: string
    port?: string
    query?: LinkQueryParams
}
export type LinkQueryParams = {
    [key: string]: string | undefined
    mod?: string
}

export function linkParamsValid({ game, host, port }: LinkParams): boolean {
    if (!game || !host) {
        return false;
    }

    switch (game?.urlType) {
        case 'gameId':
            return isValidGameID(host);
        default:
            return isValidIP(host) && !!port && isValidPort(port);
    }
}

export function isValidIP(ip: string): boolean {
    // regex from: https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses/26445549#26445549
    return ip.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/gi) != null;
}

export function isValidPort(port: string): boolean {
    const numeric = parseInt(port);
    return numeric >= 1 && numeric <= 65535;
}

export function isValidGameID(gameID: string): boolean {
    return gameID.match(/^\d+$/gi) != null;
}

export function buildGameUrl({ game, host, port, query }: LinkParams): string {
    let url = '';
    const protocol = game?.usesSteam ? 'steam' : game?.protocol;
    if (protocol) {
        url += `${protocol}://`;
    }
    if (game?.urlPrefix) {
        url += game.urlPrefix;
    }
    if (host && game?.urlType == 'ip-port') {
        url += isValidIP(host) ? host : 'invalid ip address';
    }
    if (port && game?.urlType == 'ip-port') {
        url += `:${isValidPort(port) ? port : 'invalid port'}`;
    }
    if (host && game?.urlType == 'gameId') {
        url += isValidGameID(host) ? host : 'invalid game id';
    }

    if (query) {
        url = addQueryParams(url, query);
    }

    return url;
}

export function addQueryParams(url: string, query: LinkQueryParams): string {
    const searchParams = new URLSearchParams();
    for (const key in query) {
        const value = query[key];
        if (value) {
            searchParams.set(key, value);
        }
    }

    if (searchParams.toString()) {
        url += `?${searchParams}`;
    }

    return url;
}

export function buildJoinMeLink(link: LinkParams): string {
    if (!linkParamsValid(link)) {
        return '';
    }

    let url = `https://joinme.click/g/${link.game?.protocol}/${link.host}`;
    if (link.game?.urlType == 'ip-port' && link.port) {
        url += `:${link.port}`;
    }
    if (link.query) {
        url = addQueryParams(url, link.query);
    }

    return url;
}

export function getModOptions(mods: GameMod[]): JSX.Element[] {
    const modOptions: JSX.Element[] = [];
    for (const mod of mods) {
        modOptions.push(<option key={mod.slug} value={mod.slug}>{mod.label}</option>);
    }
    
    return modOptions;
}
