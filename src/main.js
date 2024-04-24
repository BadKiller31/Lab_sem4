const Main = () => {
    return (
      <main className="col-md-8">
        <div className="text-center mb-5">
          <h1 className="fw-bold">
            ¡Encuentra en Real Plaza las mejores ofertas en tecnología, electrohogar, muebles, moda, juguetes, automotriz, supermercado y más!
          </h1>
        </div>
  
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/real-plaza-puruchuco-5-1140x570.png" className="d-block w-100 rounded" alt="Real Plaza 1"></img>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1140x570" className="d-block w-100 rounded" alt="Real Plaza 2"></img>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1140x570" className="d-block w-100 rounded" alt="Real Plaza 3"></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
  
        <div className="py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">¿Qué te ofrecemos en Real Plaza?</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Variedad de tiendas</h4>
                  <p className="card-text">En Real Plaza, encontrarás una amplia gama de tiendas que van desde moda y belleza hasta electrónica, hogar, deportes y mucho más.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Calidad y confiabilidad</h4>
                  <p className="card-text">Nos asociamos con marcas reconocidas y de confianza para ofrecerte productos de alta calidad que cumplen con tus estándares y expectativas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">Experiencia de compra única</h4>
                  <p className="card-text">Nuestras tiendas están diseñadas para brindarte una experiencia de compra cómoda y placentera.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p>Ya sea que estés buscando las últimas tendencias de moda, productos tecnológicos de vanguardia o simplemente quieras disfrutar de un día de compras con amigos y familiares, en Real Plaza encontrarás todo lo que necesitas y más.</p>
          </div>
        </div>
      </main>
    );
  }
  
  export default Main;
  