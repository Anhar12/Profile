import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portofolio from './components/Portofolio.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="bg-gray-50 text-slate-800 min-h-screen">
      <Header />
      <main className="">
        <Home />
        <About />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
