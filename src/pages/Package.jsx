import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackageText from "../components/PackageText";
import DisplayCards from "../components/DisplayCards";
import Footer from '../components/Footer';

export default function Package() {
    return (
        <>
          <HeadContact/>
          <Navbar/>
          <Hero/>
          <PackageText 
          title='Select your Best Package for your Travel' 
          text='Choose your Package'
          />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <DisplayCards />
          <Footer />
        </>
    )
}