'use client'
import AboutSection from "../layout/About/AboutSection";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Header/Navbar";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <AboutSection />
            </div>
            <Footer />
        </div>
    );
};
export default About;