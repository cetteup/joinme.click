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
    currentVersion: 'v0.1.8-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.8-alpha/joinme.click-launcher-v0.1.8-alpha-windows-amd64.zip',
    checksums: {
        md5: '4eca370f54d509d099a7dba5670c623f',
        sha1: 'dce6224e9adc9255d16ef7215ff274eefb825bc2',
        sha256: 'd7f41fbb68c293498b8c867b08bced0f4baca690caed8d1da74f7ad1772fb779'
    },
    filename: 'joinme.click-launcher.exe'
};
