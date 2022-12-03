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
    currentVersion: 'v0.1.10',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.10/joinme.click-launcher-v0.1.10-windows-amd64.zip',
    checksums: {
        md5: '3895bea4731586b99db4228efbfe9cfb',
        sha1: '0745cda865b7e9dbe253afa5d4629cb8e89d1803',
        sha256: 'cbd1b89e9c32ff1dbad80c4ba8929d8ddebae2458bc74ba992a15a67f93b2706'
    },
    filename: 'joinme.click-launcher.exe'
};
