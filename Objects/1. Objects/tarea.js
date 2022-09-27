//Inicializar y modificar

let user = {
    name: 'John',
    surname: 'Smith',
}

let objVacio = {

}

user.name = 'Pete'
console.log(user.name)

delete user.name
console.log(user.name)

//Chequear contenido de un objeto

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(user))
console.log(isEmpty(objVacio))

//Sumar valores de un objeto

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0

for (let total in salaries) {
    sum += salaries[total]
}

console.log(sum)