import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import JoinBtn from './JoinBtn';
import { Button } from 'react-bootstrap';
import DownloadModal from './DownloadModal';
import { supportedGames } from '../games/titles';

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
