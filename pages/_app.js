import '@/styles/globals.css'
// Step1: To ensure that our newly-added Bootstrap components render properly, we must import the correct CSS file.
import 'bootstrap/dist/css/bootstrap.min.css';
// Step3: imprt Layout and SWRConfig
import Layout from '@/components/Layout';
import { SWRConfig } from 'swr';


// Step3: wrap "component " with SWRConfig
export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <SWRConfig value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  ) 
}
