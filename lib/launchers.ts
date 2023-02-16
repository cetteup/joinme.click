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
    currentVersion: 'v0.2.1',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.2.1/joinme.click-launcher-v0.2.1-windows-amd64-setup.exe',
    checksums: {
        md5: '37e5586c9a511b4060c7448219816792',
        sha1: '536674e936871733a6bdc1436a0db160ba6627d0',
        sha256: '862225fa9412f35f6350238ad4729ed098e2db833723b723a781c115dcf71850'
    },
    filename: 'joinme.click-launcher-v0.2.1-windows-amd64-setup.exe'
};
