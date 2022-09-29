
function NavBar() {
 
  return (
    <nav className="navbar">
      <div className="container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <button className="sign-in">Sign In</button>
      </div>
    </nav>
  );
}

export default NavBar;
