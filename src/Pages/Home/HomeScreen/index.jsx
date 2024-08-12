import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonials from "../Testimonials";
import AnimatedImages from "../AnimatedImages";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
export default function Home() {
    return (
      <>
      <HeroSection/>
      <MySkills/>
      <AnimatedImages/>
      <AboutMe/>
      <MyPortfolio/>
      <Testimonials/>
      <ContactMe/>
      <Footer/>
      </>
    );
  }