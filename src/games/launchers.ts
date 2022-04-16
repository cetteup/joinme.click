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
    currentVersion: 'v0.1.5-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.5-alpha/joinme.click-launcher-v0.1.5-alpha-windows-amd64.zip',
    checksums: {
        md5: 'fd132a58ed8d8514c0d05cf85cfac175',
        sha1: '348e25b24d230142ae58e4b4404c1a8b292da253',
        sha256: 'c35fa7398984ee2c71f474ed5e889773d2089d28d4c22906ea79b26f3a6b1fc9'
    },
    filename: 'joinme.click-launcher.exe'
};
