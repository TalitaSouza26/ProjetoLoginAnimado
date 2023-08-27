var paragrafo = document.querySelector('.referencia')
var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('l', '')
    if (texto.length > index) {
        if (index == 0) {
            paragrafo.innerHTML = texto.charAt(index)
        } else {
            paragrafo.innerHTML += texto.charAt(index)
        }

        paragrafo.innerHTML += 'l'
        index++
        setTimeout(escrever, 180)

    }

}
escrever()