const Header = () => {
    return (
      <header className="d-flex justify-content-between align-items-center py-3 bg-dark">
        <a className="navbar-brand" href="#">
          <img src="https://lh5.googleusercontent.com/proxy/XrLncyXQ4_uXyj5XSCxudqKk1Y5a_8ILRHsNezmm_Pm50KhjtUjAzuMMj5S0bDaBbifnkilmFR6Q0GbVZIHEX4x0y0D7xDUkADJhqYi95vR_daomryVxwgmcs-aGK_QLsV7TAtpu46jYDURvVr-VbFRbU07PG_y1b99jYxqfq3uvn3IQN8bXKs4-BfbBGQ" alt="Logo" style={{ width: 'auto', height: '40px' }} />
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active text-white" aria-current="page">Inicio</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Productos</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Sucursales</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Preguntas Frecuentes</a></li>
        </ul>
  
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </header>
    );
  }
  
  export default Header;
  