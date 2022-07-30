import React, { FC } from 'react';

type IconLinkProps = {
    icon: string
    href: string
    title?: string
}

const IconLink: FC<IconLinkProps> = ({ icon, href, title }) => {
    return (
        <span className='mx-3'><a href={href} title={title}><i className={icon + ' text-white-50'}/></a></span>
    );
};

export default IconLink;
