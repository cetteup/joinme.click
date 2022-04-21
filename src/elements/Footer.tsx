import React, { FC } from 'react';
import IconLink from '../components/atoms/IconLink';

const Footer: FC = () => {
    return (
        <footer className='mt-3 fs-4'>
            <IconLink icon={'bi-github'} href={'https://github.com/cetteup/joinme.click'} />
            <IconLink icon={'bi-twitter'} href={'https://twitter.com/cetteup'} />
            <IconLink icon={'bi-send-fill'} href={'mailto:me@cetteup.com'} />
        </footer>
    );
};

export default Footer;
