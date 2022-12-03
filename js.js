const Menu = {
    botaoCal: document.querySelector(".modal"),


    open(){
        Menu.botaoCal.classList.add('show')

    },
    close(){
        Menu.botaoCal.classList.remove('show')
    }
}

let botaocalcular = document.querySelector("#btn-calculo")
let botaofechar = document.querySelector(".img-close")
let caixaPeso = document.querySelector("#input-weight")
let caixaAltura = document.querySelector("#input-height")
let result = document.querySelector(".result h1")



botaocalcular.addEventListener("click", ()=> {
    let resultado = IMC(Number(caixaPeso.value), Number(caixaAltura.value))
    if(resultado < 18.5){
        result.innerHTML = `Seu IMC é de ${resultado}kg/m2
        <span>Magreza</span>`
    }else if(resultado >= 18.5 && resultado < 24.9){
        result.innerHTML = `Seu IMC é de ${resultado}kg/m2
        <span>Normal</span>`
    }else if (resultado >= 25 && resultado < 29.9){
        result.innerHTML = `Seu IMC é de ${resultado}kg/m2
        <span>Sobrepeso</span>`
    }else if (resultado >= 30 && resultado < 39.9){
        result.innerHTML = `Seu IMC é de ${resultado}kg/m2
        <span>Obesidade</span>`
    }else {
        result.innerHTML = `Seu IMC é de ${resultado}kg/m2
        <span>Obesidade Grave</span>`
    }

   Menu.open();

})

botaofechar.addEventListener("click", ()=> {
    Menu.close();
})


function IMC(peso, altura){
    let resultado = ((peso / ((altura * altura) / 100)) * 100).toFixed(2)
    return resultado
}