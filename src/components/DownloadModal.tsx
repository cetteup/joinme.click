import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

type DownloadModalProps = {
    title: string
    protocol: string
    sourceURL: string
    downloadURL: string
    downloadChecksums: {
        md5: string
        sha1: string
        sha256: string
    }
    show: boolean
    onHide: () => void
}

const DownloadModal: FC<DownloadModalProps> = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="bg-secondary text-white">
                <h4> {props.title}</h4>
                <p>
                    Depending on your brower, you may receive a security warning when downloading the launcher. 
                    If you are unsure whether the download is safe, you can check the <a href={props.sourceURL} target="_blank" className="text-white" rel="noreferrer">source code on GitHub</a> and/or validate the checksum of the executable after the download. 
                </p>
                <p>
                    <strong>MD5:</strong> <code className="text-white">{props.downloadChecksums.md5}</code><br />
                    <strong>SHA1:</strong> <code className="text-white">{props.downloadChecksums.sha1}</code><br />
                    <strong>SHA256:</strong> <code className="text-white">{props.downloadChecksums.sha256}</code>
                </p>
                <p>
                    Once downloaded and verified, right click on the <code className="text-info">{props.protocol}-url-launcher.exe</code> and then choose <q>Run as administrator</q>.
                    This step is required in order to register it as the handler for the <code className="text-info">{props.protocol}://</code> URL protocol.
                </p>
            </Modal.Body>
            <Modal.Footer className="bg-secondary text-white">
                <Button variant="secondary bg-light text-dark" onClick={props.onHide}>Close</Button>
                <Button variant="primary" href={props.downloadURL}>Download</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DownloadModal;
