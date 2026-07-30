import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portofolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return <div className="min-h-screen overflow-x-hidden bg-[#f7f6f0] text-[#202321]"><Header /><main><Home /><About /><Experience /><Portfolio /><Contact /></main><Footer /></div>;
}
