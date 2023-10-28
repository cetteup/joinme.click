export type LauncherDetails = {
    sourceURL: string
    sourceProvider: string
    currentVersion: string
    downloadURL: string
    checksums: {
        md5: string
        sha1: string
        sha256: string
    }
    filename: string
}

export const officialLauncher: LauncherDetails = {
    sourceURL: 'https://github.com/cetteup/joinme.click-launcher',
    sourceProvider: 'GitHub',
    currentVersion: 'v0.2.2',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.2.2/joinme.click-launcher-v0.2.2-windows-amd64-setup.exe',
    checksums: {
        md5: '1fc98a122598c210f62ea81c4abacf2a',
        sha1: '700769b9d2254f55d6e0e9f93c1e75392c419e3b',
        sha256: '633fe4fd42ef9d35bb0ebb61707d30d4d845cf32b1680a6dfb4e45d8d3aa2b76'
    },
    filename: 'joinme.click-launcher-v0.2.2-windows-amd64-setup.exe'
};
