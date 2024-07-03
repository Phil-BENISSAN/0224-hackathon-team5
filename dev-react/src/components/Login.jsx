import { useState } from "react";
import "../styles/forms.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
  };

  return (
    <main>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            S'inscrire
          </button>
        </form>
      </section>
      <section></section>
    </main>
  );
}

export default Login;