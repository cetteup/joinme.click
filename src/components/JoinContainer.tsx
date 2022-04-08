import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import JoinBtn from './JoinBtn';
import { Button } from 'react-bootstrap';
import DownloadModal from './DownloadModal';

type GameConfig = {
    protocol: string
    label: string
    launcher: LauncherDetails
}

type LauncherDetails = {
    sourceURL: string
    sourceProvider: string
    downloadURL: string
    checksums:  {
        md5: string
        sha1: string
        sha256: string
    }
    filename: string
}

const officialLauncher: LauncherDetails = {
    sourceURL: 'https://github.com/cetteup/joinme.click-launcher',
    sourceProvider: 'GitHub',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.1-alpha/joinme.click-launcher-v0.1.1-alpha-windows-amd64.zip',
    checksums: {
        md5: '819f4340fc64f609a0c927523e7bafc6',
        sha1: '5bb0fd8faeeaeb5208528ac60bace5c151db70c3',
        sha256: '2ffe7cb902147dd9aec4ff959995b41466da50760a1b8155ee24e37cf91c710c'
    },
    filename: 'joinme.click-launcher.exe'
};

const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        launcher: {
            sourceURL: 'https://gist.github.com/cetteup/da31a6c2e53b872d96081e859ad178a4#file-bf1942-url-launcher-ps1',
            sourceProvider: 'GitHub',
            downloadURL: 'https://static.cetteup.com/bf1942/bf1942-url-launcher.exe',
            checksums: {
                md5: '1337ded869c37e0f02d4ca6028cbd618',
                sha1: 'e138698250b6a5a8e00e99a07ee22459e0f82f90',
                sha256: '5ca1cbeab4d2059abe84a9a051c22b36767271aac05800bbe27134338d97e9ad'
            },
            filename: 'bf1942-url-launcher.exe'
        }
    },
    bfvietnam: {
        protocol: 'bfv',
        label: 'Battlefield Vietnam',
        launcher: {
            sourceURL: 'https://gist.github.com/cetteup/c40d75c1b6d0eb32e5ebc1f329c7a5c8#file-bfv-url-launcher-ps1',
            sourceProvider: 'GitHub',
            downloadURL: 'https://static.cetteup.com/bfvietnam/bfv-url-launcher.exe',
            checksums: {
                md5: 'bc26efd5f021b4a70713a9c837b71129',
                sha1: 'd67920e55ce0aa3ede7ba1b675a4aa2cfbad050d',
                sha256: '5be9c4a7f65a96a4bfd835da036911aebd0f82efef978fb8226434fbda807992'
            },
            filename: 'bfv-url-launcher.exe'
        }
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        launcher: officialLauncher
    },
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        launcher: officialLauncher
    }
};

const JoinContainer: FC = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { game, ip, port } = useParams();

    if (!game || !ip || !port) {
        return (
            <h1 className="text-danger display-6">Whoops, required path parameters seem to be missing.</h1>
        );
    }

    const config = supportedGames[game];
    if (!config) {
        return (
            <h1 className="text-danger display-6"><q>{game}</q> is currently not supported, sorry.</h1>
        );
    }

    return (
        <>
            <h1 className="display-6">You have been invited to join {ip}:{port}, a {config.label} server</h1>
            <div>
                <JoinBtn className="mt-3 mx-3" protocol={config.protocol} ip={ip} port={port} />
                <Button className="mt-3 mx-3" variant="outline-secondary" size="lg" onClick={() => setModalShow(true)}>Download launcher</Button>
            </div>
                

            <DownloadModal
                title={'Download the launcher for ' + config.label}
                protocol={config.protocol}
                sourceURL={config.launcher.sourceURL}
                sourceProvider={config.launcher.sourceProvider}
                downloadURL={config.launcher.downloadURL}
                downloadChecksums={config.launcher.checksums}
                filename={config.launcher.filename}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default JoinContainer;
