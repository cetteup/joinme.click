import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import IconLink from './IconLink';
import Link from 'next/link';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="App bg-secondary bg-gradient">
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="joinme.click allows you to join game servers right from the browser with a single click. Supports Battlefield, Call of Duty and more."
                />
                <link rel="apple-touch-icon" href="/logo192.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <title>joinme.click | Joining any server is but a click away</title>
            </Head>
            <main>
                <Container className="p-2 d-flex align-items-center justify-content-center min-vh-100 text-center">
                    <div className="p-5 mb-2 bg-dark text-white rounded-3 h-100 vw-100">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </Container>
            </main>
        </div>
    );
};

const Footer: FC = () => {
    return (
        <footer className='mt-4'>
            <p className={'fs-5 text-white-50'}><small>Need help? Join <a href={'https://discord.gg/wwsuMk9g4E'} className="text-white-50">our Discord</a></small></p>
            <div className={'fs-4'}>
                <IconLink icon={'bi-discord'} href={'https://discord.gg/wwsuMk9g4E'} title={'Join our Discord'} />
                <IconLink icon={'bi-github'} href={'https://github.com/cetteup/joinme.click-launcher'} title={'View source code on GitHub'} />
                <IconLink icon={'bi-cloud-download'} href={'/download'} title={'Download the launcher'} />
                <IconLink icon={'bi-twitter'} href={'https://twitter.com/cetteup'} title={'Reach out on Twitter'} />
                <IconLink icon={'bi-send-fill'} href={'mailto:me@cetteup.com'} title={'Reach out via email'} />
            </div>
        </footer>
    );
};

const Header: FC = () => {
    return (
        <header className='mb-3'>
            <Link href='/'><img src='/logo.svg' alt='joinme.click logo' className='logo'/></Link>
        </header>
    );
};

export default Layout;
