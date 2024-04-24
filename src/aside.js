const feather = require('feather-icons');

const Aside = () => {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <aside className="col-md-4">
      <h1 className="d-flex justify-content-center">
        <i data-feather="message-circle" className="me-2"></i>
        CONTACTAR
      </h1>
      <form>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="">
              <i data-feather="user" className="me-2"></i>
              Nombre
            </label>
            <input type="text" className="form-control" placeholder="Anthony"></input>
          </div>
          <div className="col-6">
            <label htmlFor="">
              <i data-feather="user" className="me-2"></i>
              Apellido
            </label>
            <input type="text" className="form-control" placeholder="Davila"></input>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">
            <i data-feather="mail" className="me-2"></i>
            Correo
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@gmail.com" required></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">
            <i data-feather="lock" className="me-2"></i>
            Contraseña
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="">
            <i data-feather="edit-3" className="me-2"></i>
            Mensaje
          </label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escriba su mensaje aquí"></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          <i data-feather="send"></i>
          Enviar
        </button>
      </form>
    </aside>
  );
}

export default Aside;
