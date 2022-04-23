import React from 'react';
import { LauncherDetails, officialLauncher } from './launchers';

export type UrlType = 'ip-port' | 'gameId'
export type ServerNameSrc = 'bflist' | 'gametools' | 'gamedig-lambda'
export type BflistGame = 'bf1942' | 'bfvietnam' | 'bf2'

export type GameConfig = {
    protocol: string
    label: string
    urlType: UrlType
    requiresLauncher: boolean
    launcher?: LauncherDetails
    minLauncherVersion?: string
    hint?: JSX.Element
    mods?: GameMod[]
    usesSteam?: boolean
    urlPrefix?: string
    serverNameSrc?: ServerNameSrc
    bflistGame?: BflistGame
}

export type GameMod = {
    label: string
    slug: string
    hidden?: boolean
}

export const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        mods: [
            { label: 'The Road to Rome', slug: 'xpack1', hidden: true },
            { label: 'Secret Weapons of WWII', slug: 'xpack2', hidden: true },
            { label: 'Battlefield 1918', slug: 'bf1918' },
            { label: 'Desert Combat (0.7)', slug: 'desertcombat' },
            { label: 'Desert Combat Final', slug: 'dc_final' },
            { label: 'Pirates', slug: 'pirates' }
        ],
        serverNameSrc: 'bflist',
        bflistGame: 'bf1942'
    },
    bf1942rtr: {
        protocol: 'bf1942rtr',
        label: 'Battlefield 1942: The Road to Rome',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf1942'
    },
    bf1942sw: {
        protocol: 'bf1942sw',
        label: 'Battlefield 1942: Secret Weapons of WWII',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf1942'
    },
    bfvietnam: {
        protocol: 'bfvietnam',
        label: 'Battlefield Vietnam',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        mods: [
            { label: 'Battlegroup 42', slug: 'battlegroup42' }
        ],
        serverNameSrc: 'bflist',
        bflistGame: 'bfvietnam'
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        mods: [
            { label: 'Special Forces', slug: 'xpack', hidden: true },
            { label: 'Allied Intent Xtended', slug: 'aix2' },
            { label: 'Pirates (Yarr2)', slug: 'bfp2' },
            { label: 'Point of Existence 2', slug: 'poe2' }
        ],
        serverNameSrc: 'bflist',
        bflistGame: 'bf2'
    },
    bf2sf: {
        protocol: 'bf2sf',
        label: 'Battlefield 2: Special Forces',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf2'
    },
    bf4: {
        protocol: 'bf4',
        label: 'Battlefield 4',
        urlType: 'gameId',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.5-alpha',
        serverNameSrc: 'gametools'
    },
    bf1: {
        protocol: 'bf1',
        label: 'Battlefield 1',
        urlType: 'gameId',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.5-alpha',
        serverNameSrc: 'gametools'
    },
    cod: {
        protocol: 'cod',
        label: 'Call of Duty',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'gamedig-lambda'
    },
    coduo: {
        protocol: 'coduo',
        label: 'Call of Duty: United Offensive',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'gamedig-lambda'
    },
    cod2: {
        protocol: 'cod2',
        label: 'Call of Duty 2',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'gamedig-lambda'
    },
    cod4: {
        protocol: 'cod4',
        label: 'Call of Duty 4: Modern Warfare',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'gamedig-lambda'
    },
    codwaw: {
        protocol: 'codwaw',
        label: 'Call of Duty: World at War',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'gamedig-lambda'
    },
    et: {
        protocol: 'et',
        label: 'ET: LEGACY',
        urlType: 'ip-port',
        requiresLauncher: false,
        hint: (<small>ET: Legacy does not require a launcher. You only need to have the game installed, which you can get at <a href={'https://www.etlegacy.com/download'} target='_blank' className="text-white" rel="noreferrer">etlegacy.com/download</a></small>),
    },
    fearsec2: {
        protocol: 'fearsec2',
        label: 'F.E.A.R. Combat (SEC2)',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.7-alpha',
        mods: [
            { label: 'Booster pack', slug: 'boosterpack1' },
            { label: 'Mirage', slug:'mirage' }
        ]
    },
    swat4: {
        protocol: 'swat4',
        label: 'SWAT 4',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    swat4x: {
        protocol: 'swat4x',
        label: 'SWAT 4: The Stetchkov Syndicate',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    vietcong: {
        protocol: 'vietcong',
        label: 'Vietcong',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    }
};
