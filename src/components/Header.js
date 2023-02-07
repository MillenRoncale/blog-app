import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <div className="navbar justify-content-end bg-dark-subtle">
        <Link to="/"><strong>Home</strong></Link>
        <Link to="/news"><strong>News</strong></Link>
        <Link to="/maps"><strong>Maps</strong></Link>
        <Link to="/agents"><strong>Agents</strong></Link>
        <Link to="/Login"><strong>Login</strong></Link>
      </div>
    </>
  );
}

export default Header;
