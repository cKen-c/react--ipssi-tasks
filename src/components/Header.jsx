import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>;
        <Link to="/tasks">Voir les tâches en cours</Link>;
      </nav>
    </header>
  );
};

export default Header;
