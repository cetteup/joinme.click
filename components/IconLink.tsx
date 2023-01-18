import React, { FC } from 'react';
import Link from 'next/link';

type IconLinkProps = {
    icon: string
    href: string
    title?: string
}

const IconLink: FC<IconLinkProps> = ({ icon, href, title }) => {
    return (
        <span className='mx-3'><Link href={href} title={title}><i className={icon + ' text-white-50'}/></Link></span>
    );
};

export default IconLink;
