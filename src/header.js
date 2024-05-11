const feather = require('feather-icons');

const Header = () => {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <header className="d-flex justify-content-between align-items-center py-3 bg-dark">
      <a className="navbar-brand" href="#" style={{ fontFamily: "'Press Start 2P', cursive", color: 'white', fontSize: '20px' }}>
        UndergroundPE
      </a>
      <div>
        <button className="btn btn-outline-light me-2">
          <i data-feather="home" className="me-1"></i> Inicio
        </button>
        <button className="btn btn-outline-light me-2">
          <i data-feather="shopping-cart" className="me-1"></i> Productos
        </button>
        <button className="btn btn-outline-light me-2">
          <i data-feather="map-pin" className="me-1"></i> Sucursales
        </button>
        <button className="btn btn-outline-light">
          <i data-feather="help-circle" className="me-1"></i> Preguntas Frecuentes
        </button>
      </div>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-light" type="submit">
          <i data-feather="search"></i>
        </button>
      </form>
    </header>
  );
}

export default Header;
