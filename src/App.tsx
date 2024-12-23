import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Designs from './components/Designs';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Designs />
      <Services />
      <AboutUs />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
