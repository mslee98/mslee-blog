import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
    )
}
