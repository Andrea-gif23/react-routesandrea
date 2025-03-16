import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Soy un desarrollador web apasionado por crear soluciones innovadoras.</p>
      <nav>
        <Link to="/projects">Proyectos</Link> |{" "}
        <Link to="/resume">Currículum</Link>
      </nav>
    </div>
  );
};

export default Home;