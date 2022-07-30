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
    currentVersion: 'v0.1.9',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.9/joinme.click-launcher-v0.1.9-windows-amd64.zip',
    checksums: {
        md5: 'be1a8c103db0055ad4519194ac7c45d9',
        sha1: '5db77cac2cd7e7186b9833debdd4c2eb5b2f7d29',
        sha256: 'deb7baca4f1290d11229ad184f301e76797429d82452e2ff64b08b84f7ca8ffd'
    },
    filename: 'joinme.click-launcher.exe'
};
