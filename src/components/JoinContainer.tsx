import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import JoinBtn from './JoinBtn';
import { Button } from 'react-bootstrap';
import DownloadModal from './DownloadModal';

type GameConfig = {
    protocol: string
    label: string
    launcher: LauncherDetails
    minLauncherVersion: string
}

type LauncherDetails = {
    sourceURL: string
    sourceProvider: string
    currentVersion: string
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
    currentVersion: 'v0.1.2-alpha',
    downloadURL: 'https://github.com/cetteup/joinme.click-launcher/releases/download/v0.1.2-alpha/joinme.click-launcher-v0.1.2-alpha-windows-amd64.zip',
    checksums: {
        md5: '90b9d4cf78c562a036996fcbda3cf012',
        sha1: '94fb962325f653fea20b723b45c6ccfb315808ce',
        sha256: 'cadd29d8e1104ea18ad5e5cf37cae5449e8b524adc9c982ce226028c88453c49'
    },
    filename: 'joinme.click-launcher.exe'
};

const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    bfvietnam: {
        protocol: 'bfv',
        label: 'Battlefield Vietnam',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
    },
    bf2: {
        protocol: 'bf2',
        label: 'Battlefield 2',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.1-alpha'
    },
    paraworld: {
        protocol: 'paraworld',
        label: 'ParaWorld',
        launcher: officialLauncher,
        minLauncherVersion: 'v0.1.2-alpha'
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
            <div className="mt-3">
                <p className="text-white-50"><small>{config.label} requires launcher version {config.minLauncherVersion} or later.
                    You can determine your launcher version by looking at the details tab of the {config.launcher.filename} file properties.</small></p>
            </div>


            <DownloadModal
                title={'Download the launcher'}
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
