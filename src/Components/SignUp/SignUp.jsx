import { Link } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/UserContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 5) {
      setError("Password Less than 8 characters");
      return;
    }
    if (password !== confirm) {
      setError("Dont Match Password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .cath((error) => console.error(error));
  };
  return (
    <div className="form-container my-5">
      <h3 className="form-title text-center">Sign Up</h3>
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
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p className="text-down-btn">
        Already Have account?
        <Link to="/logIn" className="new-acc">
          Log In
        </Link>
        <p className="text-error">{error}</p>
      </p>
    </div>
  );
};

export default SignUp;
