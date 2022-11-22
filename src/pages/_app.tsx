import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, TypographyStylesProvider } from '@mantine/core';
import theme from '../constants/theme';
import AppShell from '../components/Layout/AppShell';
import Header from '../components/Header/Header';
import Content from '../components/Layout/Content';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Student workshop on scientific computing</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
        <AppShell>
          <Header />

          <TypographyStylesProvider>
            <Content>
              <Component {...pageProps} />
            </Content>
          </TypographyStylesProvider>
        </AppShell>
      </MantineProvider>
    </>
  );
};

export default App;
