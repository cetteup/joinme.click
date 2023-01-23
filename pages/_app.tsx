import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script strategy={'afterInteractive'} data-domain={'joinme.click'} src={'https://plausible.cetteup.com/js/plausible.js'} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
