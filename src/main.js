import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
    return (
      <main className="col-md-8">
        <div className="text-center mb-5">
          <h1 className="fw-bold">
            ¡Encuentra en Real Plaza las mejores ofertas en tecnología, electrohogar, muebles, moda, juguetes, automotriz, supermercado y más!
          </h1>
        </div>
  
        <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://elcomercio.pe/resizer/154Aw4arS1atCK2ylXh3colFKFw=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FEU3TN4YMZFVRCAWL5BUPBB3GA.jpeg" className="d-block w-100 rounded" alt="Real Plaza 1" />
        <Carousel.Caption>
          <h3>CENTROS COMERCIALES A NIVEL NACIONAL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://gestion.pe/resizer/elVQjqRnkNibm0yJRmTpGPDhLsU=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RDUMSRCGPRAUZBQYJ52XEC4ME4.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://elcomercio.pe/resizer/JAbvNYhWZ_CBBBA4ykbBHbDZmHw=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7R5JAVIZFVCMJP2UYT22GBYBRY.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
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
  