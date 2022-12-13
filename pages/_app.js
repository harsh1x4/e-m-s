import '../styles/globals.css'
import Sidebar from './components/Sidebar'

function MyApp({ Component, pageProps }) {
  return <>
    <Sidebar />
    <div style={{ width: "calc( 100vw - 15.625rem )", position:"relative", left: "15.625rem", padding: "1.5rem 1rem", overflowX:"hidden"  }}>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
