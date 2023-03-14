import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import queryClient from "../lib/query";
import "../styles/globals.css";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const siteKeyRecaptcha = process.env.NEXT_PUBLIC_SITE_KEY_RECAPTCHA3;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={String(siteKeyRecaptcha)}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: 'head',
                nonce: undefined,
            }}
        >
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Component {...pageProps} />
            </QueryClientProvider>
        </GoogleReCaptchaProvider>
    );
}

export default MyApp;
