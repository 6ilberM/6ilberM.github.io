const NavigationBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
        <li>
          <a href="/about/" className="nav-link">About</a>
        </li>
        <li>
          <a href="/portfolio/" className="nav-link">Portfolio</a>
        </li>
        <li>
          <a href="/contact/" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
