import React, { FC, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useLocalStorage } from '../lib/hooks';
import { buildGameUrl, LinkParams } from '../lib/util';

type AutoJoinToggleProps = {
    linkParams: LinkParams
}

type Server = {
    protocol: string
    host: string
    port?: string
}

const AutoJoinToggle: FC<AutoJoinToggleProps> = ({ linkParams }) => {
    const [autoJoinServers, setAutoJoinServers] = useLocalStorage<Server[]>('autoJoinServers', []);
    const server: Server = {
        protocol: linkParams.game!.protocol,
        host: linkParams.host!,
        port: linkParams.port
    };

    // linkParams does not change unless the page is reloaded, so this only triggers on page load/navigation
    useEffect(() => {
        if (isAutoJoinServer(server, autoJoinServers)) {
            window.location.replace(buildGameUrl(linkParams));
        }
    }, [linkParams]);

    return (
        <Form.Check
            type={'switch'}
            id={'auto-join-switch'}
            label={'Automatically join this server'}
            onChange={(e) => {
                const enabled = e.target.checked;
                if (enabled && !isAutoJoinServer(server, autoJoinServers)) {
                    setAutoJoinServers([...autoJoinServers, server]);
                }
                else if (!enabled && isAutoJoinServer(server, autoJoinServers)) {
                    setAutoJoinServers(autoJoinServers.filter((s) => {
                        return s.protocol != server.protocol && s.host != server.host && s.port != server.port;
                    }));
                }
            }}
            checked={isAutoJoinServer(server, autoJoinServers)}
        />
    );
};

export function isAutoJoinServer(server: Server, autoJoinServers: Server[]): boolean {
    return autoJoinServers.some((s) => {
        return s.protocol == server.protocol && s.host == server.host && s.port == server.port;
    });
}

export default AutoJoinToggle;
