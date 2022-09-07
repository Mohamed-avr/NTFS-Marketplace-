import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  (
    <div className=' bg-ground '> 
    <Layout>
      { <Component {...pageProps} />}
    </Layout>
    </div>
  )
}

export default MyApp
