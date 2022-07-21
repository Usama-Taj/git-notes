const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <a href="#">
            <img
              src="assets/images/logo.svg"
              alt="Emumba Logo"
              className="logo"
            />
          </a>
          <div className="controls">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Name..."
            />
            <button>Login</button>
          </div>
        </nav>
      </header>
      <div className="under-header"></div>
    </>
  );
};

export default Header;
