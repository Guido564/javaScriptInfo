// De switch a if
let browser = 'Safari'

if (browser == 'Edge') {
    console.log('Tenes Edge!')
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    console.log('Esto anda tambien')
} else {
    console.log('MMMMMMMM')
}

// De if a switch
let a = 10

switch (a) {
    case 0:
        console.log(a)
        break;
    case 1:
        console.log(a)
        break;
    case 2:
    case 3:
        console.log('2 o 3 jejeje')
        break;
    default:
        console.log('No hay nada para vos')
}