// Example (Sirf Imports aur Structure)
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certificate from "./sections/Certificate";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";



function App() {
  return (
    <main className="bg-black text-white"> 
    
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
      <WhatsAppButton/>
      
    </main>
  );
}
export default App;