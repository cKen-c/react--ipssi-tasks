import Header from "../../components/Header";

const PageAccueil = () => {
  // logique ici

  // rendering ici (HTML + un tout petit de JS si besoin)
  return (
    <>
      <p>Page Accueil</p>
      <Header />
      <form action="" style={{ margin: "20px" }}>
        <div>
          <label htmlFor="email">Merci de saisir de votre email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">
            Merci de saisir de votre mot de passe
          </label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Se connecter</button>
      </form>
    </>
  );
};

export default PageAccueil;
