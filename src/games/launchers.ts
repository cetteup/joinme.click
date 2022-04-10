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
    currentVersion: 'v0.1.2-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.2-alpha/joinme.click-launcher-v0.1.2-alpha-windows-amd64.zip',
    checksums: {
        md5: '90b9d4cf78c562a036996fcbda3cf012',
        sha1: '94fb962325f653fea20b723b45c6ccfb315808ce',
        sha256: 'cadd29d8e1104ea18ad5e5cf37cae5449e8b524adc9c982ce226028c88453c49'
    },
    filename: 'joinme.click-launcher.exe'
};
