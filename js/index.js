import CalculateFinal from "./calculateFinal.js"
import CalculateMedias from "./calculateMedias.js"

const resetButton = document.getElementById('resetButton')


const MediaFinal = document.getElementById('MediaFinal')
const MediaN1 = document.getElementById('mediaN1')
const MediaN2 = document.getElementById('mediaN2')
const NotaAI = document.getElementById('inputNotaAI')


const inputNota1n1 = document.getElementById('inputNota1n1')
const inputNota2n1 = document.getElementById('inputNota2n1')
const inputNota1n2 = document.getElementById('inputNota1n2')
const inputNota2n2 = document.getElementById('inputNota2n2')


const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

// Calcula
inputNota1n1.addEventListener('blur', function () {
    if(inputNota2n1.value != ''){
        MediaN1.value = CalculateMedias(parseFloat(inputNota1n1.value), parseFloat(inputNota2n1.value))
    } 
    if(MediaN1.value != '' && MediaN2.value != '' && NotaAI.value != ''){
        MediaFinal.value = CalculateFinal(parseFloat(MediaN1.value), parseFloat(MediaN2.value), parseFloat(NotaAI.value)) + NotaAI.value
    }
})

inputNota2n1.addEventListener('blur', function () {
    if(inputNota1n1.value != ''){
        MediaN1.value = CalculateMedias(parseFloat(inputNota1n1.value), parseFloat(inputNota2n1.value))
    }
    if(MediaN1.value != '' && MediaN2.value != '' && NotaAI.value != ''){
        MediaFinal.value = CalculateFinal(parseFloat(MediaN1.value), parseFloat(MediaN2.value), parseFloat(NotaAI.value)) + NotaAI.value
    }
})
inputNota1n2.addEventListener('blur', function () {
    if(inputNota2n2.value != ''){
        MediaN2.value = CalculateMedias(parseFloat(inputNota1n2.value), parseFloat(inputNota2n2.value))
    }
    if(MediaN1.value != '' && MediaN2.value != '' && NotaAI.value != ''){
        MediaFinal.value = CalculateFinal(parseFloat(MediaN1.value), parseFloat(MediaN2.value), parseFloat(NotaAI.value)) + NotaAI.value
    }
})

inputNota2n2.addEventListener('blur', function () {
    if(inputNota1n2.value != ''){
        MediaN2.value = CalculateMedias(parseFloat(inputNota1n2.value), parseFloat(inputNota2n2.value))
    }
    if(MediaN1.value != '' && MediaN2.value != '' && NotaAI.value != ''){
        MediaFinal.value = CalculateFinal(parseFloat(MediaN1.value), parseFloat(MediaN2.value), parseFloat(NotaAI.value)) + NotaAI.value
    }
})

NotaAI.addEventListener('blur', function () {
    if(inputNota1n2.value != ''){
        MediaN2.value = CalculateMedias(parseFloat(inputNota1n2.value), parseFloat(inputNota2n2.value))
    }
    if(MediaN1.value != '' && MediaN2.value != '' && NotaAI.value != ''){
        MediaFinal.value = CalculateFinal(parseFloat(MediaN1.value), parseFloat(MediaN2.value), parseFloat(NotaAI.value))
    }
})

//Calcula finaliza aqui


// Botao de Resetar
resetButton.addEventListener('click', function (ev) {
    ev.preventDefault()
    inputNota1n1.value = ''
    inputNota2n1.value = ''
    inputNota1n2.value = ''
    inputNota2n2.value = ''
    MediaN1.value = ''
    MediaN2.value = ''
    NotaAI.value = ''
    MediaFinal.value = ''
})

inputNota1n1.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        inputNota1n1.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        inputNota1n1.value = inputNota1n1.value.slice(0, -1)
    }

})

inputNota2n1.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        inputNota2n1.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        inputNota2n1.value = inputNota2n1.value.slice(0, -1)
    }

})

inputNota1n2.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        inputNota1n2.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        inputNota1n2.value = inputNota1n2.value.slice(0, -1)
    }

})

inputNota2n2.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        inputNota2n2.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        inputNota2n2.value = inputNota2n2.value.slice(0, -1)
    }
})
