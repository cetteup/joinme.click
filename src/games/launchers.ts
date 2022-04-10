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
    currentVersion: 'v0.1.3-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.3-alpha/joinme.click-launcher-v0.1.3-alpha-windows-amd64.zip',
    checksums: {
        md5: 'd02ceef54412f54898ea50c8ef4963ad',
        sha1: '8919e9bde05e9d3e9a8c8814f29429d3ca938f75',
        sha256: 'a708b800a423ffdbe1adc8d1c15aa6910d8872a5321db480855c005a906c0155'
    },
    filename: 'joinme.click-launcher.exe'
};
