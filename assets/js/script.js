/* Actividad 1*/

const perrito = document.querySelector("#perrito")

perrito.addEventListener("click", () => {
    if(perrito.style.border == 'none'){
        perrito.style.border = "2px solid red"
    }
    else{
        perrito.style.border = 'none'
    }
})


/* Actividad 2 */

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
const boton = document.querySelector("#btn")
const resultado = document.querySelector("#resultado")

boton.addEventListener("click", () => {
    let num1 = input1.value
    let num2 = input2.value
    let num3 = input3.value
    let total = Number(num1) + Number(num2) + Number(num3)
    console.log(total)
    if(total <= 10){
        resultado.innerHTML = 'Compra exitosa'
    }
    else{
        resultado.innerHTML = 'Llevas demasiados stickers'
    }
})

/* Actividad 3 */

const clave1 = 911
const clave2= 714

const numero1 = document.querySelector("#numero1")
const numero2 = document.querySelector("#numero2")
const numero3 = document.querySelector("#numero3")
const botonclave = document.querySelector("#btnclave")
const respuesta = document.querySelector("#resultado3")

botonclave.addEventListener("click", () => {
    let num1 = numero1.value
    let num2 = numero2.value
    let num3 = numero3.value
    let clave = num1 + num2 + num3
    if(clave == clave1){
        respuesta.innerHTML= 'Password 1 Correcto'
    }
    else if(clave == clave2){
        respuesta.innerHTML= 'Password 2 Correcto'
    }
    else{
        respuesta.innerHTML= 'Password Incorrecto'
    }
})



