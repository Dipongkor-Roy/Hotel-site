import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="form-container my-5">
        <h3 className="form-title text-center">Log In</h3>
        <form className="align-items-center">
       
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <input className="btn-submit" type="submit" value="LogIn" />
        </form>
        <p className="text-down-btn">
          New Guest?
          <Link to="/logIn" className="new-acc">
            Register or SignUp
          </Link>
        </p>
      </div>
    );
};

export default LogIn;