const formulario = document.getElementById("formulario")
const listar = document.getElementById("listar")
let datos = [];


formulario.addEventListener("submit", e => {
         e.preventDefault();

        let nombre= document.getElementById("nombres").value
        let apellido= document.getElementById("apellidos").value
        let correo= document.getElementById("correo").value
        let contraseña= document.getElementById("pas").value
       
        console.log(nombre, apellido, correo, contraseña)
        agregarUsuario(nombre, apellido, correo, contraseña)
       guardarDatos();


    const agregarUsuario = (nombre, apellido, correo, contraseña) => {
        let registro = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,    
        }
        datos.push(registro)
        console.log(datos)
}
    //almacenamos y enviamos los datos al localstorage   (setItem)
    const guardarDatos = () => {
        localStorage.setItem("usuario", JSON.stringify(datos))
        listarDatos();
}
    //convertimos de nuevo los datos para nosotros usarlos (getItem)
    const listarDatos = () => {
        listar.innerHTML = " ";
        datos = JSON.parse(localStorage.getItem("usuario"))
        datos.forEach(element => {
        const { nombre, apellido, correo, contraseña } = element
        listar.innerHTML += ` <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">usuario: ${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">apellido: ${apellido}</h6>
          <h6 class="card-subtitle mb-2 text-muted">correo: ${correo}</h6>
          <h6 class="card-subtitle mb-2 text-muted">contraseña: ${contraseña} años</h6>
        </div>
      </div> `
        })
        }
    })