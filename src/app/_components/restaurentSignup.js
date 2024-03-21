const RestaurentSignUp = () => {
  return (
    <>
      <div className="container">
        <h3>SignUp Page</h3>
        <div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Email Id"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter restaurent name"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter City"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Address"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Mobile Number"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <button className="button">SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurentSignUp;
