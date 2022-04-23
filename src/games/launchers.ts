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
    currentVersion: 'v0.1.7-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.7-alpha/joinme.click-launcher-v0.1.7-alpha-windows-amd64.zip',
    checksums: {
        md5: '59e82cc7358b9a5468b69c584d22e58d',
        sha1: 'a845e8960c58353bb85711330ab6f46adba8b3d6',
        sha256: 'a715acfffcb46cdc535ce0f753513a01d0b3aaa0be2335e669f6b928b5376dc0'
    },
    filename: 'joinme.click-launcher.exe'
};
