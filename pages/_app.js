import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  (
    <div className=' bg-ground '> 
   <Component {...pageProps} />
    </div>
  )
}

export default MyApp
