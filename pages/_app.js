// import Header from '@/components/layouts/Header'
// import Footer from '@/components/layouts/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from "next-themes";
import DefaultLayout from '@/components/DefaultLayout';

export default function App({ Component, pageProps }) {

  console.log("!!!!!!!!!!!!",Component)

  return (
    <>
      <ThemeProvider attribute='class'>
        {/* <Header /> */}
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
    )
}
