'use strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Registro
    </h2>
    <p class="lead">Aqui puedes iniciar el proceso de registro de tu institucion</p>
  </div>
</div>
</div>
<div class="container sub">
<form class="need-validation" novalidate>
  <div class="form-row d-flex justify-content-center text-center">
    <div class="col-md-7 mb-3">
      <label for="validationCustomUsername">Identificacion</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Nombre por el cual la institucion va a ser identificada"
          aria-describedby="inputGroupPrepend" required>
        <div class="valid-feedback">Correcto</div>  
        <div class="invalid-feedback">Necesita poner un nombre valido</div>
      </div>
    </div>
    <div class="col-md-7 mb-3">
      <label for="validationCustom01">Nombre de la institucion</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Ex: Institucion educativa utopia" required>
      <div class="valid-feedback">Correcto</div>
      <div class="invalid-feedback">Necesita poner un nombre valido</div>
    </div>
    <div class="form-group col-7">
      <label for="validationCustom02">Elija los servicios que va a prestar</label>
      <select class="custom-select" id="validationCustom02" required>
        <option value="">Seleccione una de las opciones</option>
        <option value="1">Primaria</option>
        <option value="2">Bachillerato</option>
        <option value="3">Ambas</option>
      </select>
      <div class="valid-feedback">Correcto</div>
      <div class="invalid-feedback">Debe escoger una de esas</div>
    </div>
    <div class="col-12"></div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom03">Usuario administrador</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Usuario" required>
      <div class="valid-feedback">Correcto</div>
      <div class="invalid-feedback">Debe escoger un valor no mayor a 12 caracteres</div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom04">Contraseña administrador</label>
      <input type="password" class="form-control" id="validationCustom04" placeholder="Contraseña" required>
      <div class="valid-feedback">Correcto</div>
      <div class="invalid-feedback">Por favor ingrese una contraseña valida</div>
    </div>
    <div class="form-group col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
          Aceptar terminos y condiciones
        </label>
        <div class="invalid-feedback">Debe aceptar antes de enviar los datos</div>
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
      <button class="btn btn-primary mb-3 envio" type="submit">Registrarse</button>
  </div>
</form>
</div>`
