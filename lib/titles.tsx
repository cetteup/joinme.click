import React from 'react';
import { LauncherDetails, officialLauncher } from './launchers';

export type GameConfig = {
    protocol: string
    label: string
    urlType: 'ip-port' | 'gameId' | 'guid'
    requiresLauncher: boolean
    launcher?: LauncherDetails
    minLauncherVersion?: string
    alert?: JSX.Element
    hint?: JSX.Element
    mods?: GameMod[]
    usesSteam?: boolean
    urlPrefix?: string
    serverNameConfig?: {
        provider: 'bflist' | 'gametools' | 'gameserver-lister' | 'gamedig'
        gameName?: string
        queryPortOffset?: number
    }
}

export type GameMod = {
    label: string
    slug: string
    isXpack?: boolean
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
            { label: 'The Road to Rome', slug: 'xpack1', isXpack: true },
            { label: 'Secret Weapons of WWII', slug: 'xpack2', isXpack: true },
            { label: 'Battlefield 1918', slug: 'bf1918' },
            { label: 'Desert Combat (0.7)', slug: 'desertcombat' },
            { label: 'Desert Combat Final', slug: 'dc_final' },
            { label: 'Pirates', slug: 'pirates' }
        ],
        serverNameConfig: {
            provider: 'bflist'
        }
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
        serverNameConfig: {
            provider: 'bflist'
        }
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        mods: [
            { label: 'Special Forces', slug: 'xpack', isXpack: true },
            { label: 'Allied Intent Xtended', slug: 'aix2' },
            { label: 'Battlefield Pirates 2 (Yarr2)', slug: 'bfp2' },
            { label: 'Point of Existence 2', slug: 'poe2' },
            { label: 'Arctic Warfare', slug: 'arctic_warfare' }
        ],
        serverNameConfig: {
            provider: 'bflist'
        }
    },
    bf4: {
        protocol: 'bf4',
        label: 'Battlefield 4',
        urlType: 'gameId',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.2',
        serverNameConfig: {
            provider: 'gametools'
        }
    },
    bf1: {
        protocol: 'bf1',
        label: 'Battlefield 1',
        urlType: 'gameId',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.2',
        serverNameConfig: {
            provider: 'gametools'
        }
    },
    cod: {
        protocol: 'cod',
        label: 'Call of Duty',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig'
        }
    },
    coduo: {
        protocol: 'coduo',
        label: 'Call of Duty: United Offensive',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig'
        }
    },
    cod2: {
        protocol: 'cod2',
        label: 'Call of Duty 2',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig'
        }
    },
    cod4: {
        protocol: 'cod4',
        label: 'Call of Duty 4: Modern Warfare',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig'
        }
    },
    codwaw: {
        protocol: 'codwaw',
        label: 'Call of Duty: World at War',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig'
        }
    },
    et: {
        protocol: 'et',
        label: 'ET: LEGACY',
        urlType: 'ip-port',
        requiresLauncher: false,
        hint: (<small>ET: Legacy does not require a launcher. You only need to have the game installed, which you can get at <a href={'https://www.etlegacy.com/download'} target='_blank' className="text-white" rel="noreferrer">etlegacy.com/download</a></small>),
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'wolfensteinet'
        }
    },
    fear: {
        protocol: 'fear',
        label: 'F.E.A.R./F.E.A.R. Combat',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'fear'
        }
    },
    fearsec2: {
        protocol: 'fearsec2',
        label: 'F.E.A.R. Combat (SEC2)',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'fear'
        }
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
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'swat4',
            queryPortOffset: 1
        }
    },
    swat4x: {
        protocol: 'swat4x',
        label: 'SWAT 4: The Stetchkov Syndicate',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'swat4',
            queryPortOffset: 1
        }
    },
    unreal: {
        protocol: 'unreal',
        label: 'Unreal',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig',
            queryPortOffset: 1
        }
    },
    ut: {
        protocol: 'ut',
        label: 'Unreal Tournament',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig',
            queryPortOffset: 1
        }
    },
    ut2003: {
        protocol: 'ut2003',
        label: 'Unreal Tournament 2003',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.12',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'protocol-gamespy1', // GameSpy protocol is *way* faster than Unreal
            queryPortOffset: 10
        }
    },
    ut2004: {
        protocol: 'ut2004',
        label: 'Unreal Tournament 2004',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.2.0',
        serverNameConfig: {
            provider: 'gamedig',
            gameName: 'protocol-gamespy1', // GameSpy protocol is *way* faster than Unreal
            queryPortOffset: 10
        }
    },
    vietcong: {
        protocol: 'vietcong',
        label: 'Vietcong',
        urlType: 'ip-port',
        requiresLauncher: true,
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    vu: {
        protocol: 'vu',
        label: 'Venice Unleashed',
        urlType: 'guid',
        requiresLauncher: false,
        hint: (<small>Venice Unleashed does not require a launcher. You only need to have the client installed, which you can get at <a href={'https://veniceunleashed.net/'} target='_blank' className="text-white" rel="noreferrer">veniceunleashed.net</a></small>),
        urlPrefix: 'join/',
        serverNameConfig: {
            provider: 'gameserver-lister'
        }
    },
};
