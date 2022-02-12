import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/header";
import Footer from "../../components/footer";
import MintNFT from "../../components/mint";
import Banner from "../../components/banner";

AOS.init();

function Mint() {
    return (
        <div>
            <header className="page-header">
                <Header />
            </header>
            <Banner />
            <section className="mint">
                <MintNFT />
            </section>
            <div className="section-seperater right"></div>
            <footer className="page-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Mint;
