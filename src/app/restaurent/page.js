"use client";

import { useState } from "react";
import RestaurentLogin from "../_components/restaurentLogin";
import RestaurentSignUp from "../_components/restaurentSignup";

const Restaurent = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Restaurent Login/signUp</h1>
        {login ? <RestaurentLogin /> : <RestaurentSignUp />}

        <button className="button-link" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have account? SignUp"
            : "Already have Account? Login"}
        </button>
      </div>
    </>
  );
};

export default Restaurent;
