import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills"; // Assuming you have a Skills page

function App() {
  return (
    <div className="bg-red-500 min-h-screen text-white">
      {/* This div is just to test Tailwind styling */}
      <p className="p-4 text-xl">Tailwind CSS is working!</p>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
