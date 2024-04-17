const Main = () =>{
    return <main className="col-md-8">
        <div>
            <h1 className="d-flex justify-content-center">¡Encuentra en Real Plaza las mejores ofertas en tecnología, electrohogar, muebles, moda, juguetes, automotriz, supermercado y más!</h1>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/real-plaza-puruchuco-5-1140x570.png" className="d-block w-100" alt="..."></img>
                    </div>
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        <div className="py-4">
            <p></p>
            <div>
                <p>En Real Plaza, nuestras tiendas están cuidadosamente seleccionadas para ofrecerte una experiencia de compra excepcional y una amplia variedad de productos y servicios para satisfacer todas tus necesidades.</p>
                <p>¿Qué te ofrecemos?</p>
                <ul>
                    <li>
                        <p><strong>Variedad de tiendas:</strong> En Real Plaza, encontrarás una amplia gama de tiendas que van desde moda y belleza hasta electrónica, hogar, deportes y mucho más. Nuestro diverso catálogo de tiendas asegura que encuentres todo lo que necesitas en un solo lugar.</p>
                    </li>
                    <li>
                        <p><strong>Calidad y confiabilidad:</strong> Nos asociamos con marcas reconocidas y de confianza para ofrecerte productos de alta calidad que cumplen con tus estándares y expectativas. En Real Plaza, la calidad es nuestra prioridad.</p>
                    </li>
                    <li>
                        <p><strong>Experiencia de compra unica:</strong> Nuestras tiendas están diseñadas para brindarte una experiencia de compra cómoda y placentera. Desde tiendas amplias y bien iluminadas hasta un ambiente acogedor y un servicio al cliente excepcional, nos esforzamos por hacer que tu visita a Real Plaza sea inolvidable.</p>
                    </li>
                </ul>
                <p>Ya sea que estés buscando las últimas tendencias de moda, productos tecnológicos de vanguardia o simplemente quieras disfrutar de un día de compras con amigos y familiares, en Real Plaza encontrarás todo lo que necesitas y más. ¡Te esperamos en nuestras tiendas para brindarte una experiencia de compra extraordinaria!</p>
            </div>
        </div>
    </main>
}

export default Main;