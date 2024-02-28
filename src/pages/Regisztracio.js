import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Regisztracio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      console.log(response);
      token = response.data;
    });
  return (
    <div className="m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Regisztráció</h1>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="nev" className="form-label">
            Név:
          </label>
          <input
            type="text"
            value={name}
            // state értékének módosításváltozik a beviteli mező tartalma
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="nev"
            placeholder="Kiss Pista"
            name="nev"
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            // state értékének módosításváltozik a beviteli mező tartalma
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
        </div>
        <div>
            {errors.email && (
              <span className="text-danger">{errors.email[0]}</span>
            )}
          </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Jelszó:
          </label>
          <input
            type="password"
            value={password}
            // state értékének módosításváltozik a beviteli mező tartalma
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="pwd"
            placeholder="Jelszó"
            name="pwd"
          />
          <div>
            {errors.password && (
              <span className="text-danger">{errors.password[0]}</span>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="repwd" className="form-label">
            Jelszó újra:
          </label>
          <input
            type="password"
            value={password_confirmation}
            // state értékének módosításváltozik a beviteli mező tartalma
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            className="form-control"
            id="repwd"
            placeholder="Jelszó újra"
            name="repwd"
          />
          <div>
            {errors.password_confirmation && (
              <span className="text-danger">{errors.password_confirmation[0]}</span>
            )}
          </div>
        </div>

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Regisztrálok
          </button>

          <p>
            Már van regisztrált fiókod?
            <Link className="nav-link text-info" to="/bejelentekezes">
              Bejelentkezés
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
