const Footer = () => {
    return (
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="mb-4">Desarrollador</h5>
              <p className="text-white"> Davila Ortiz, Briyan</p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Universidad</h5>
              <p>© 2024 UNIVERSIDAD PRIVADA ANTENOR ORREGO</p>
              <p>INTERACCION HOMBRE MAQUINA</p>
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Contacto</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none"><i className="fas fa-envelope"></i> Email</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="fas fa-phone"></i> Teléfono</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-white text-decoration-none"><i className="fab fa-facebook"></i> Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  