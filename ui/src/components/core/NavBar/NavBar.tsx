import { Link } from "react-router-dom";
import logo from "../../../img/costs_logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Costs Logo" className="h-8" />
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li className="text-white hover:text-yellow-500">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white hover:text-yellow-500">
          <Link to="/projects">Projetos</Link>
        </li>
        <li className="text-white hover:text-yellow-500">
          <Link to="/company">Empresa</Link>
        </li>
        <li className="text-white hover:text-yellow-500">
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
