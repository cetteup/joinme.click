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
    currentVersion: 'v0.1.12',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.12/joinme.click-launcher-v0.1.12-windows-amd64.zip',
    checksums: {
        md5: '92ba5790a60f01c31a77f911fb694e45',
        sha1: '2a9b5d8b12f0311fb6ae2f72c6dd3ce43f7f1f34',
        sha256: '772823d67e91f14bf4afbaa9c40d9410ff7b7a32ccc5f3d052da93773896a455'
    },
    filename: 'joinme.click-launcher.exe'
};
