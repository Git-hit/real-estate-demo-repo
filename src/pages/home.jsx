import CTA from "../components/cta";
import Footer from "../components/footer";
import HomeHero from "../components/homeHero";
import HomeProjectsChoose from "../components/homeProjectsChoose";
import Navbar from "../components/navbar";
import OurProjects from "../components/ourProjects";
import Whyus from "../components/whyus";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HomeHero />
            <HomeProjectsChoose />
            <OurProjects />
            <CTA />
            <Whyus />
            <Footer />
        </div>
    )
}