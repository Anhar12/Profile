import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portofolio from './components/Portofolio.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return <div className="min-h-screen overflow-x-hidden bg-[#090b10] text-[#e9edf4]"><Header /><main><Home /><About /><Portofolio /><Contact /></main><Footer /></div>;
}
