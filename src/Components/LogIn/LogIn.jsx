import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from=location.state?.from?.pathname || "/"; //it will check if there location state and from availabale or not is it then it take the path name,else it will take home location
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from,{replace:true});
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-container my-5">
      <h3 className="form-title text-center">Log In</h3>
      <form onSubmit={handleSubmit} className="align-items-center">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="LogIn" />
      </form>
      <p className="text-down-btn">
        New Guest?
        <Link to="/signUp" className="new-acc">
          Register or SignUp
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
