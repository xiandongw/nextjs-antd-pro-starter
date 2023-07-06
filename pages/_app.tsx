import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layouts/main'


// const AppLayout = dynamic(() => import('../components/layouts/main'), { ssr: false });

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <AppLayout>
//       <Head>
//         <title>My App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Component {...pageProps} />
//     </AppLayout>
//   );
// }

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}

export default MyApp

