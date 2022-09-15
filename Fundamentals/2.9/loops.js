// loguear even numbers
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// loop pasado a while
let i = 0

while(i < 3){
    console.log(i)
    i++
}

// buscar numeros primos
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    console.log(i); 
}