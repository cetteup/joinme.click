import React, { FC } from 'react';

type IconLinkProps = {
    icon: string
    href: string
}

const IconLink: FC<IconLinkProps> = ({ icon, href }) => {
    return (
        <span className='mx-3'><a href={href}><i className={icon + ' text-white-50'}/></a></span>
    );
};

export default IconLink;
