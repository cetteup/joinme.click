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
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    }
};
