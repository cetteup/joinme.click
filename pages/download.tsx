import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { officialLauncher } from '../lib/launchers';

const Download: FC = () => {
    return (
        <>
            <h1 className="display-6">Download the joinme.click launcher ({officialLauncher.currentVersion})</h1>
            <div className="my-4">
                <p>
                    You need the launcher to make the custom URL protocols (<code className="text-info">bf2://</code> etc.) work on your system. You only need to download the launcher once.
                    Subsequent game launches will work without any prior download for all games supported by the launcher version you downloaded.
                </p>
                <p>
                    Depending on your browser, you may receive a security warning when downloading the launcher.
                    If you are unsure whether the download is safe, you can check the <a href={officialLauncher.sourceURL} target="_blank" className="text-white" rel="noreferrer">source code on {officialLauncher.sourceProvider}</a> and/or verify the checksum of the installer after the download.
                </p>
                <p>
                    <strong>MD5:</strong> <code className="text-white">{officialLauncher.checksums.md5}</code><br />
                    <strong>SHA1:</strong> <code className="text-white">{officialLauncher.checksums.sha1}</code><br />
                    <strong>SHA256:</strong> <code className="text-white">{officialLauncher.checksums.sha256}</code>
                </p>
                <p>
                    Once downloaded and verified, run <code className="text-info">{officialLauncher.filename}</code> and click through the setup.
                    The installer will register the launcher as the handler for all supported URL protocols.
                    As soon as the install is done, you are ready to join servers by just clicking a URL.
                </p>
            </div>
            <Button variant="primary" size='lg' href={officialLauncher.downloadURL} data-umami-event={'download-launcher'}>Download installer</Button>
        </>
    );
};

export default Download;
