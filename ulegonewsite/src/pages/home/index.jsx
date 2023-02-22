import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import UlegoPhoneView from "../../components/ulegophoneview/UlegoPhoneView";

export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <UlegoPhoneView />  
        <Newsletter />   
        <Footer />
      </div>
    </>
  );
};
