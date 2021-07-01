function segundosParaAmanha() {
    let hoje = new Date()
    let hojeEmSegundos = hoje.getSeconds() + hoje.getHours() * 60 * 60 + hoje.getMinutes() * 60
    let segundosDia = 24*60*60
    return (segundosDia - hojeEmSegundos)
}

console.log(segundosParaAmanha());