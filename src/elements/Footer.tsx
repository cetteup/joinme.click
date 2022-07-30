import React, { FC } from 'react';
import IconLink from '../components/atoms/IconLink';

const Footer: FC = () => {
    return (
        <footer className='mt-4'>
            <p className={'fs-5 text-white-50'}><small>Need help? Join <a href={'https://discord.gg/wwsuMk9g4E'} className="text-white-50">our Discord</a></small></p>
            <div className={'fs-4'}>
                <IconLink icon={'bi-discord'} href={'https://discord.gg/wwsuMk9g4E'} title={'Join our Discord'} />
                <IconLink icon={'bi-github'} href={'https://github.com/cetteup/joinme.click'} title={'View source code on GitHub'} />
                <IconLink icon={'bi-cloud-download'} href={'/download'} title={'Download the launcher'} />
                <IconLink icon={'bi-twitter'} href={'https://twitter.com/cetteup'} title={'Reach out on Twitter'} />
                <IconLink icon={'bi-send-fill'} href={'mailto:me@cetteup.com'} title={'Reach out via email'} />
            </div>
        </footer>
    );
};

export default Footer;
