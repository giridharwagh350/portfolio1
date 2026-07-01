import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Focus from "./components/sections/Focus";
import Research from "./components/sections/Research";
import Social from "./components/sections/Social";
import Footer from "./components/sections/Footer";
import Creator from "./components/sections/Creator"; 


export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-dark overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Sticky Pill Navigation */}
      <Navbar />

      {/* Main Sections Assembly */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Current Focus Bento Grid */}
        <Focus />

        {/* 4. Content Creator Spotlight */}
        <Creator />

        {/* 5. Research Internship & Student Exchange highlight */}
        <Research />

        {/* 6. Premium Social Widgets */}
        <Social />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
