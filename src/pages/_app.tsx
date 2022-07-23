import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app'
import { RegisterContextDataProvider } from '../contexts/registerContextData';
import { RegisterContextStepProvider } from '../contexts/registerContextStep';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <RegisterContextDataProvider>
      <RegisterContextStepProvider>
        <Component {...pageProps} />
      </RegisterContextStepProvider>
    </RegisterContextDataProvider>
  )
}

export default MyApp
