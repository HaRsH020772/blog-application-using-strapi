import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress height={5} color={'blue'}/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
