import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Aside = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <aside className="col-md-4 p-4">
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        <i data-feather="message-circle" className="me-2"></i>
        Contacto
      </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Nombre
          </label>
          <input type="text" className="form-control" id="firstName" placeholder="Anthony" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            <i data-feather="user" className="me-2"></i>
            Apellido
          </label>
          <input type="text" className="form-control" id="lastName" placeholder="Davila" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i data-feather="mail" className="me-2"></i>
            Correo
          </label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@gmail.com" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            <i data-feather="edit-3" className="me-2"></i>
            Mensaje
          </label>
          <textarea className="form-control" id="message" rows="3" placeholder="Escriba su mensaje aquí"></textarea>
        </div>

        <button type="submit" className="btn btn-primary d-block w-100">
          <i data-feather="send" className="me-2"></i>
          Enviar
        </button>
      </form>
    </aside>
  );
}

export default Aside;
