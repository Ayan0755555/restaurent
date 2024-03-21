const RestaurentLogin = () => {
  return (
    <>
    <div className="container">
      <h3>Login Page</h3>
      <div>
     <div className="input-wrapper">
     <input type="text" placeholder="Enter Email Id" className="input-field"/>
     </div>
     <div className="input-wrapper">
     <input type="password" placeholder="Enter Password" className="input-field"/>
     </div>
     <div className="input-wrapper">
     <button className="button">Login</button>
     </div>
      </div>
      </div>
    </>
  );
};

export default RestaurentLogin;
