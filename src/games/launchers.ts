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
    currentVersion: 'v0.1.4-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.4-alpha/joinme.click-launcher-v0.1.4-alpha-windows-amd64.zip',
    checksums: {
        md5: 'e37b7b274eed83b249ba43461ece6796',
        sha1: '673a49814d003893906e50ea79c447bfd18437fa',
        sha256: 'e936773e0905ebafa68baae2701901cfd73a570c23ac301d1a8231c2d44cc096'
    },
    filename: 'joinme.click-launcher.exe'
};
