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
    currentVersion: 'v0.1.11',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.11/joinme.click-launcher-v0.1.11-windows-amd64.zip',
    checksums: {
        md5: 'a4614bca6a8bd85087b71d69cddb142e',
        sha1: '06007484885e671631b2f7ef44b524f1c57fafa7',
        sha256: '73e431d4bf32d238f26e6a5d94a9c2166c32a8fa3e232e29cfb14ef8295be5ba'
    },
    filename: 'joinme.click-launcher.exe'
};
