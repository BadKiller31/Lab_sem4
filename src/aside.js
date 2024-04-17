const Aside = () =>{
    return <aside className="col-md-4">
        <h1 className="d-flex justify-content-center">CONTACTAR</h1>
        <form>
            <div className="form-group row">
                <div className="col-6">
                    <label for="">Nombre</label>
                    <input type="text" className="form-control" placeholder="Anthony"></input>
                </div>
                <div className="col-6">
                    <label for="">Apellido</label>
                    <input type="text" className="form-control" placeholder="Davila"></input>
                </div>
            </div>
            <br></br>
            <div class="form-group">
                    <label for="">Correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@gmail.com" required></input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escriba su mensaje aqui"></textarea>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </aside>
}

export default Aside;