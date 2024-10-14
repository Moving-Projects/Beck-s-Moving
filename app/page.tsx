import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/Home/AboutUs";
import Advantages from "./components/Home/Advantages";
import Hero from "./components/Home/Hero";
import RequestQuote from "./components/Home/RequestQuote";
import Reviews from "./components/Home/Reviews";
import Services from "./components/Home/Services";

export default function Home () {
  return(
    <>
      <Header/>
      <Hero/>
      <Services />
      <AboutUs />
      <Advantages />
      <Reviews />
      <RequestQuote />
      <Footer homepage/>
    </>
  )
}