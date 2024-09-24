import { NavBar } from "./components/core/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/core/Toast/Toaster";

// Componentes vazios para ilustrar
const Projects = () => <div>Projects Page</div>;
const Company = () => <div>Company Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
