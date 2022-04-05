import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import JoinBtn from './JoinBtn';
import { Alert, Button } from 'react-bootstrap';
import DownloadModal from './DownloadModal';

type GameConfig = {
    protocol: string
    label: string
    sourceURL: string
    launcherDownloadURL: string
    launcherChecksums:  {
        md5: string
        sha1: string
        sha256: string
    }
}

const supportedGames: Record<string, GameConfig> = {
    bf1942: {
        protocol: 'bf1942',
        label: 'Battlefield 1942',
        sourceURL: 'https://gist.github.com/cetteup/da31a6c2e53b872d96081e859ad178a4#file-bf1942-url-launcher-ps1',
        launcherDownloadURL: 'https://static.cetteup.com/bf1942/bf1942-url-launcher.exe',
        launcherChecksums: {
            md5: '1337ded869c37e0f02d4ca6028cbd618',
            sha1: 'e138698250b6a5a8e00e99a07ee22459e0f82f90',
            sha256: '5ca1cbeab4d2059abe84a9a051c22b36767271aac05800bbe27134338d97e9ad'
        }
    },
    bfvietnam: {
        protocol: 'bfv',
        label: 'Battlefield Vietnam',
        sourceURL: 'https://gist.github.com/cetteup/c40d75c1b6d0eb32e5ebc1f329c7a5c8#file-bfv-url-launcher-ps1',
        launcherDownloadURL: 'https://static.cetteup.com/bfvietnam/bfv-url-launcher.exe',
        launcherChecksums: {
            md5: 'bc26efd5f021b4a70713a9c837b71129',
            sha1: 'd67920e55ce0aa3ede7ba1b675a4aa2cfbad050d',
            sha256: '5be9c4a7f65a96a4bfd835da036911aebd0f82efef978fb8226434fbda807992'
        }
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
                sourceURL={config.sourceURL}
                downloadURL={config.launcherDownloadURL}
                downloadChecksums={config.launcherChecksums}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default JoinContainer;
