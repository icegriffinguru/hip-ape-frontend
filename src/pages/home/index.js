import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/header";
import Banner from "../../components/banner";
import About from "../../components/about";
import SneakPeek from "../../components/sneakpeek";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";
import Footer from "../../components/footer";

AOS.init();

function Home() {
    return (
        <div>
            <header className="page-header">
                <Header />
            </header>
            <Banner />
            <section className="about" id="about">
                <About />
            </section>
            <div className="section-seperater right"></div>
            <section className="artist section-padding" id="artist" data-aos="fade-up">
                <SneakPeek />
            </section>
            <div className="section-seperater left"></div>
            <section className="roadmap section-padding" id="roadmap">
                <Roadmap />
            </section>
            <section className="faq" id="faq">
                <Faq />
            </section>
            <div className="section-seperater left"></div>
            <footer className="page-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
