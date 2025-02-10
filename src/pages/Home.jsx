import HeadContact from "../components/HeadContact";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PackageText from "../components/PackageText";
import DisplayCards from "../components/DisplayCards";
import Destinations from "../components/Destinations";

export default function Home() {
  return (
    <>
      <HeadContact />
      <Navbar />
      <div className="container">
        <Hero />
        <SearchBar />
      </div>
      <PackageText 
      title='Select your Best Package for your Travel' 
      text='Choose your Package'
      />
      <DisplayCards />
      <DisplayCards />
      <PackageText 
      title='Select Our Best Popular Destinations' 
      text='Popular Destinations'
      />
      <Destinations />

      <PackageText 
      title='Why Travel with Africa wizzy Safari' 
      text='Why us?'
      />
    </>
  );
}
