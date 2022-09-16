// Basicamente simplifique una funcion que valida la edad con el operador OR y el ???

function checkAgeQuestionMark(age) {
    let verificacion = age > 17 ? true : 'Necesitas permiso parental'

    console.log(verificacion)
}

checkAgeQuestionMark(14)

function checkAgeOr(age) {
    return age > 17 || 'Necesitas permiso parental'
}

console.log(checkAgeOr(20))

// Min saca el minimo de dos digitos, pow hace pow
function min(a, b) {
    let min = a > b ? b : a
    return min
}

console.log(min(250, 100))

function pow(x, n) {
    return x ** n
}

console.log(pow(1, 100))
