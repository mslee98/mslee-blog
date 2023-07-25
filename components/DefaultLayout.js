import Header from './layouts/Header';
import Footer from './layouts/Footer';

export default function DefaultLayout({children}) {

    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}