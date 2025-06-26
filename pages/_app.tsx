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
            <Script strategy={'afterInteractive'} data-website-id={'9951c580-ffa2-4c36-923e-baf71be361f3'} src={'https://analytics.cetteup.com/script.js'} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
