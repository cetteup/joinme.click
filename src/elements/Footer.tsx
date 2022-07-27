import React, { FC } from 'react';
import IconLink from '../components/atoms/IconLink';

const Footer: FC = () => {
    return (
        <footer className='mt-4'>
            <p className={'fs-5'}><small>Need help? Join <a href={'https://discord.gg/wwsuMk9g4E'}>our Discord.</a></small></p>
            <div className={'fs-4'}>
                <IconLink icon={'bi-discord'} href={'https://discord.gg/wwsuMk9g4E'} />
                <IconLink icon={'bi-github'} href={'https://github.com/cetteup/joinme.click'} />
                <IconLink icon={'bi-twitter'} href={'https://twitter.com/cetteup'} />
                <IconLink icon={'bi-send-fill'} href={'mailto:me@cetteup.com'} />
            </div>
        </footer>
    );
};

export default Footer;
