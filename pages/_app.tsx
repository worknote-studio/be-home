import Layout from "@/components/Layout";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import "./index.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>宅研所實業有限公司</title>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="keywords" content="宅研所" />
        <meta property="og:title" content="宅研所實業有限公司"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://be-home.vercel.app/"></meta>
        <meta property="og:description" content="整合行銷定位"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
