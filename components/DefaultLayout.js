import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import { useRouter } from 'next/router';

export default function DefaultLayout({children}) {

    // const router = useRouter()
    // console.log("@@@@@@@@@",router.query)
    
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}