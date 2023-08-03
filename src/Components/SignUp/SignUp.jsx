import { Link } from "react-router-dom";
import './SignUp.css'
const SignUp = () => {
  return (

      <div className="form-container my-5">
        <h3 className="form-title text-center">Sign Up</h3>
        <form className="align-items-center">
          <div className="form-control">
            <label htmlFor="email">Name</label>
            <input type="name" name="name" placeholder="Name" required />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <input className="btn-submit" type="submit" value="SignUp" />
        </form>
        <p className="text-down-btn">
          Already Have account?
          <Link to="/logIn" className="new-acc">
            Log In
          </Link>
        </p>
      </div>
  
  );
};

export default SignUp;
