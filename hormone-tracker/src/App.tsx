import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Technology from './components/Technology';
import Team from './components/Team';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Technology />
      <Team />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
