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
            <h5>Universidad</h5>
            <p>© 2024 UNIVERSIDAD PRIVADA ANTENOR ORREGO</p>
            <p>INTERACCIÓN HOMBRE MAQUINA</p>
          </div>
          <div className="col-md-3">
            <h5>Síguenos</h5>
            <a href="#" className="me-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-2"><i className="fab fa-youtube"></i></a>
            <a href="#" className="me-2"><i className="fab fa-tiktok"></i></a>
          </div>
          <div className="col-md-3">
            <h5>Descarga la app</h5>
            <a href="https://apps.apple.com" target="_blank" className="me-2">
              <img src="https://w7.pngwing.com/pngs/663/177/png-transparent-app-store-ios-apple-apple-text-logo-fruit-nut.png" alt="App Store" style={{ height: '40px' }}/>
            </a>
            <a href="https://play.google.com/store" target="_blank" className="me-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGadvBea3JYoj377RJbJLRLEE4L0OE6GXSnA&usqp=CAU" alt="Google Play" style={{ height: '40px' }}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
