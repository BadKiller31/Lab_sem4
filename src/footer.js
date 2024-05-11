const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-3">
            <h5>Desarrollador</h5>
            <p>Davila Ortiz, Briyan</p>
          </div>
          <div className="col-md-3">
            <p>© 2024 UNDERGROUNDPE UPAO</p>
            
          </div>
          <div className="col-md-3">
            <h5>Síguenos</h5>
            <a href="#" className="me-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-2"><i className="fab fa-youtube"></i></a>
            <a href="#" className="me-2"><i className="fab fa-tiktok"></i></a>
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;


