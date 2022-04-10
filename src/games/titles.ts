import { LauncherDetails, officialLauncher } from './launchers';

export type GameConfig = {
    protocol: string
    label: string
    launcher: LauncherDetails
    minLauncherVersion: string
}

export const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    bfvietnam: {
        protocol: 'bfvietnam',
        label: 'Battlefield Vietnam',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.1-alpha'
    },
    bf2sf: {
        protocol: 'bf2sf',
        label: 'Battlefield 2: Special Forces',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    cod: {
        protocol: 'cod',
        label: 'Call of Duty',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    coduo: {
        protocol: 'coduo',
        label: 'Call of Duty: United Offensive',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    cod2: {
        protocol: 'cod2',
        label: 'Call of Duty 2',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    cod4: {
        protocol: 'cod4',
        label: 'Call of Duty 4: Modern Warfare',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    codwaw: {
        protocol: 'codwaw',
        label: 'Call of Duty: World at War',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    fearsec2: {
        protocol: 'fearsec2',
        label: 'F.E.A.R. Combat (SEC2)',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    swat4: {
        protocol: 'swat4',
        label: 'SWAT 4',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    swat4x: {
        protocol: 'swat4x',
        label: 'SWAT 4: The Stetchkov Syndicate',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    },
    vietcong: {
        protocol: 'vietcong',
        label: 'Vietcong',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.3-alpha'
    }
};
