"use client";

import { useState } from "react";

import RestaurentHeader from "../_components/RestaurentHeader";
import "./style.css"
import RestaurentLogin from "../_components/restaurentLogin";
import RestaurentSignUp from "../_components/restaurentSignup";
import RestaurentFooter from "../_components/RestaurentFooter";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurentHeader />
        <h1>Restaurent Login/signUp</h1>
        {login ? <RestaurentLogin /> : <RestaurentSignUp />}

        <button className="button-link" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have account? SignUp"
            : "Already have Account? Login"}
        </button>
      </div>
      <RestaurentFooter/>
    </>
  );
};

export default Restaurent;
