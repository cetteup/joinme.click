// copied from https://github.com/t0yohei/react-copy-to-clipboard-ts/blob/30da3198a96e3687f7b324efb7e3c55210bdf8cf/src/index.ts
import copy from 'copy-to-clipboard';
import { Children, cloneElement, type FC, type MouseEvent, type ReactElement, useCallback } from 'react';

export interface CopyToClipboardOptions {
    debug?: boolean;
    message?: string;
    format?: string;
}

export type ChildProps = {
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    [key: string]: unknown;
};

export interface CopyToClipboardProps {
    text: string;
    onCopy?: (text: string, result: boolean) => void;
    options?: CopyToClipboardOptions;
    children: ReactElement<ChildProps>;
}

const CopyToClipboard: FC<CopyToClipboardProps> = (
    {
        text,
        onCopy,
        options,
        children,
        ...props
    }) => {
    const onClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const elem = Children.only(children) as ReactElement<ChildProps>;
            const result = copy(text, options);

            if (onCopy) {
                onCopy(text, result);
            }

            // Bypass onClick if it was present
            if (elem.props.onClick && typeof elem.props.onClick === 'function') {
                elem.props.onClick(event);
            }
        },
        [ text, onCopy, options, children ],
    );

    const elem = Children.only(children) as ReactElement<ChildProps>;
    return cloneElement(elem, { onClick, ...props });
};

export default CopyToClipboard;
