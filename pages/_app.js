import '../styles/globals.css'
import Sidebar from './components/Sidebar'

function MyApp({ Component, pageProps }) {
  return <>
    <Sidebar />
    <div style={{ width: "calc( 100vw - 15.625rem )", marginLeft: "15.625rem", padding: "10px" }}>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
