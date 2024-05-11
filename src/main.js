import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
    return (
      <main className="col-md-8">
  
   
  <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://highxtar.com/wp-content/uploads/2020/11/highxtar-j-balvin-air-jordan-1-colaboracio%CC%81n-oficial-1jpg.jpg"
              alt="J Balvin x Air Jordan 1"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>J Balvin x Air Jordan 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://static.mercadonegro.pe/wp-content/uploads/2021/04/06105603/south-park-adidas-campus-80s-towelie-gz9177.jpg"
              alt="Adidas x South Park Toallin"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Adidas x South Park Toallin</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.backseries.com/wp-content/uploads/travis-scott-nike-sb-dunk-low-jackboys-ct5053-001.jpg"
              alt="Travis Scott x Nike SB Dunk"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Travis Scott x Nike SB Dunk</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

  
    <div className="py-5">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">Descubre lo que te ofrece UndergroundPe</h2>
    <p className="lead mb-5">
      En UndergroundPe, te traemos lo último en colaboraciones exclusivas y zapatillas originales de Nike y Adidas. Explora nuestra colección seleccionada y vive tu pasión por el estilo con cada paso.
    </p>
    <div className="row">
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card mb-4 shadow">
          <div className="card-body text-center">
            <i className="bi bi-grid-3x3-gap-fill" style={{fontSize: "2rem"}}></i>
            <h5 className="card-title mt-3">Variedad Inigualable</h5>
            <p className="card-text">Desde ediciones limitadas hasta clásicos modernos, encuentra la variedad más amplia de zapatillas premium.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card mb-4 shadow">
          <div className="card-body text-center">
            <i className="bi bi-shield-check" style={{fontSize: "2rem"}}></i>
            <h5 className="card-title mt-3">Autenticidad Garantizada</h5>
            <p className="card-text">Cada par es autenticado para garantizar su originalidad y calidad superior.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card mb-4 shadow">
          <div className="card-body text-center">
            <i className="bi bi-heart-fill" style={{fontSize: "2rem"}}></i>
            <h5 className="card-title mt-3">Pasión por las Zapatillas</h5>
            <p className="card-text">Compartimos tu pasión y te ayudamos a encontrar ese par perfecto que habla por ti.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      </main>
    );
  }
  
  export default Main;

