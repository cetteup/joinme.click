import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

type DownloadModalProps = {
    title: string
    game: string
    protocol: string
    sourceURL: string
    sourceProvider: string
    downloadURL: string
    downloadChecksums: {
        md5: string
        sha1: string
        sha256: string
    }
    filename: string
    show: boolean
    onHide: () => void
}

const DownloadModal: FC<DownloadModalProps> = ({
    title,
    game,
    protocol,
    sourceURL,
    sourceProvider,
    downloadURL,
    downloadChecksums,
    filename,
    ...props
}: DownloadModalProps) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="bg-secondary text-white">
                <h4>{title}</h4>
                <p>
                    You need the launcher to make the <code className="text-info">{protocol}://</code> URL protocol work on your system. You only need to download the launcher once.
                    Subsequent game launches will work without any prior download for all games supported by the launcher version you downloaded.
                </p>
                <p>
                    Depending on your browser, you may receive a security warning when downloading the launcher.
                    If you are unsure whether the download is safe, you can check the <a href={sourceURL} target="_blank" className="text-white" rel="noreferrer">source code on {sourceProvider}</a> and/or verify the checksum of the installer after the download.
                </p>
                <p>
                    <strong>MD5:</strong> <code className="text-white">{downloadChecksums.md5}</code><br />
                    <strong>SHA1:</strong> <code className="text-white">{downloadChecksums.sha1}</code><br />
                    <strong>SHA256:</strong> <code className="text-white">{downloadChecksums.sha256}</code>
                </p>
                <p>
                    Once downloaded and verified, run <code className="text-info">{filename}</code> and click through the setup.
                    The installer will register the launcher as the handler for the <code className="text-info">{protocol}://</code> URL protocol.
                    As soon as the install is done, you are ready to join {game} servers by just clicking a URL.
                </p>
            </Modal.Body>
            <Modal.Footer className="bg-secondary text-white">
                <Button variant="secondary bg-light text-dark" onClick={props.onHide}>Close</Button>
                <Button variant="primary" href={downloadURL}>Download</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DownloadModal;
