function imprimeNumeros(comeco, fim) {
    let interval = setInterval(() => {
        if (comeco == fim) clearInterval(interval)
        console.log(comeco)
        comeco++
    }, 1000)
}