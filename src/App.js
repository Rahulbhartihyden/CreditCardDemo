import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/FontAwesomeIcons";
import Hero from "./components/Hero/Hero";
import Section1 from "./components/Section-1/Section_1";
import FormSection from "./components/FormSection/FormSection";
import Section2 from "./components/Section-2/Section_2";
import Section3 from "./components/Section-3/Section3";
import Accordino from "./components/FAQSection/Accordino";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Section1 />
      <FormSection />
      <Section2 />
      <Section3 />
      
      <Accordino/>
      <Footer/>

      
    </div>
  );
}

export default App;
