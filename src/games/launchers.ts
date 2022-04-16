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
    currentVersion: 'v0.1.6-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.6-alpha/joinme.click-launcher-v0.1.6-alpha-windows-amd64.zip',
    checksums: {
        md5: 'f9551bc5627b1f8c3e0f29ae199c4bd0',
        sha1: '503bf47b1b0045f39ed39880b546f7a1d16fa384',
        sha256: 'eb4b492835c8953b9eae5a55f0f7ac957a5d9c770bebea9e12ce3bbca4e644a1'
    },
    filename: 'joinme.click-launcher.exe'
};
