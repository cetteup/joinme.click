import React from 'react';
import { LauncherDetails, officialLauncher } from './launchers';

export type ServerNameSrc = 'bflist'
export type BflistGame = 'bf1942' | 'bfvietnam' | 'bf2'

export type GameConfig = {
    protocol: string
    label: string
    requiresLauncher: boolean
    launcher?: LauncherDetails
    minLauncherVersion?: string
    hint?: JSX.Element
    serverNameSrc?: ServerNameSrc
    bflistGame?: BflistGame
}

export const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf1942'
    },
    bfvietnam: {
        protocol: 'bfvietnam',
        label: 'Battlefield Vietnam',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bfvietnam'
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.1-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf2'
    },
    bf2sf: {
        protocol: 'bf2sf',
        label: 'Battlefield 2: Special Forces',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameSrc: 'bflist',
        bflistGame: 'bf2'
    },
    cod: {
        protocol: 'cod',
        label: 'Call of Duty',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    coduo: {
        protocol: 'coduo',
        label: 'Call of Duty: United Offensive',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    cod2: {
        protocol: 'cod2',
        label: 'Call of Duty 2',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    cod4: {
        protocol: 'cod4',
        label: 'Call of Duty 4: Modern Warfare',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    codwaw: {
        protocol: 'codwaw',
        label: 'Call of Duty: World at War',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    et: {
        protocol: 'et',
        label: 'ET: LEGACY',
        requiresLauncher: false,
        hint: (<small>ET: Legacy does not require a launcher. You only need to have the game installed, which you can get at <a href={'https://www.etlegacy.com/download'} target='_blank' className="text-white" rel="noreferrer">etlegacy.com/download</a></small>)
    },
    fearsec2: {
        protocol: 'fearsec2',
        label: 'F.E.A.R. Combat (SEC2)',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    swat4: {
        protocol: 'swat4',
        label: 'SWAT 4',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    swat4x: {
        protocol: 'swat4x',
        label: 'SWAT 4: The Stetchkov Syndicate',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    vietcong: {
        protocol: 'vietcong',
        label: 'Vietcong',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    }
};
