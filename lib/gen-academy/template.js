'use-strict'

module.exports = `
<section id="body-rest">
  <div class="container">
  <div class="row d-flex justify-content-center text-center">
    <div class="col jumbotron jumbotron-signin ">
      <h2 class="bienvenida titulo display-4 titulog">
        Crea
      </h2>
      <p class="lead">Ten en cuenta de que si se va a armar un grupo el periodo y el grado deben ser los mismos para que haya relacion
      </p>
    </div>
  </div>
  <form class="form-general mb-2" id="gen-academy">
  <div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="titulog w-100 mb-2 mt-2">Nombre del curso</span>
  <div class="input-group mb-3 col-6">
    <input type="text" class="form-control nombreCurso" placeholder="Matematicas 11" aria-label="Username" aria-describedby="basic-addon1"
      required>
  </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Ingresar el periodo academico</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control periodo" placeholder="2018-A" aria-label="Username" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Ingresar el grado</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control curso" placeholder="11" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Ingresar el codigo especial del curso</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control codigoG" placeholder="math-a" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
    <div class="row d-flex justify-content-center text-center">
        <button type="submit" class="btn btn-primary mb-3 titulog">Enviar</button>
    </div>
  </form>
</div>
</section>`
