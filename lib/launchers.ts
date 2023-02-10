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
    currentVersion: 'v0.2.0',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.2.0/joinme.click-launcher-v0.2.0-windows-amd64.zip',
    checksums: {
        md5: '31236db48743ab7a4fcd1133b8803960',
        sha1: 'c953b2aa1857b954575600884a67a936fc8487f1',
        sha256: 'b85b3e08df672afef3de80901c3d3bf067718463f8aa52abdd10ee7de379fe09'
    },
    filename: 'joinme.click-launcher.exe'
};
