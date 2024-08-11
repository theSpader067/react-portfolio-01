import './App.css';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import Navbar_1 from './components/Navbar_1';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievments from './components/Achievments';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
function App() {
  return (
    <main className="bg-black overflow-x-hidden tracking-tighter text-gray-200 antialiased">
      <Navbar_1/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Achievments/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}

export default App;
