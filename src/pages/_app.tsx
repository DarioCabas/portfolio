import type { AppProps } from 'next/app';
import React, { useState, useEffect, useMemo } from 'react'
import { red } from '@mui/material/colors';
import type { NextPage } from 'next';
import type { EmotionCache } from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import Layout from 'src/components/layout/main-layout';
import { theme as customTheme } from 'src/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import ColorModeContext from 'src/components/color-mode-context';
import createEmotionCache from 'src/utils/create-emotion-cache';
import type { FC } from 'react';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
}

const MyApp: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = useState<string>('dark');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

      try {
        window.localStorage.setItem('themeMode', mode);
      } catch {
        /* do nothing */
      }
    }
  }), [mode]);

  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      // @ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Ayauma
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        {// @ts-ignore
          <ThemeProvider theme={customTheme[mode]}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        }
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

export default MyApp
