let nombre= document.getElementById("nombres");
let apellido= document.getElementById("apellidos");
let correo= document.getElementById("correo");
let contraseña= document.getElementById("pas");
let registro= document.getElementById("reg");

registro.addEventListener("click", () => {
	console.log(nombre.textContent)
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("correo", correo.value)
    localStorage.setItem("clave", contraseña.value)

})