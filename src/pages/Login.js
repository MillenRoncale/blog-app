import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="card cardLogin" data-aos="fade-down">
      <br /><br /><br />
        <div className="card-body1">
          <label htmlFor="username">
            Username:
            <input name="username" class="form-control"></input>
          </label>
        </div>
        <br /><br />
        <div className="card-body">
          <label htmlFor="password">
            Password:
            <input type="password" class="form-control"></input>
          </label>
          <br /><br /><br /><br /><br />
          <Link to="/profile" className="login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
