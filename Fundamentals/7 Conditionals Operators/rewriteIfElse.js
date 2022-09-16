let login = 'aaaaaaaaaaaaaaaaaaa'

let message = (login == 'Empleado') ? 'Hola y bienvenido de vuelta' : (login == 'Director') ? 'Director! Que sorpresa!' : (login == '') ? 'Que estas esperando?' : 'No se puede ingresar hasta que haya ingresado algo'

console.log(message)