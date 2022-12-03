const Menu = {
    botaoCal: document.querySelector(".modal"),

    botaocalcular: document.querySelector("#btn-calculo"),
    botaofechar: document.querySelector(".img-close"),
    caixaPeso: document.querySelector("#input-weight"),
    caixaAltura: document.querySelector("#input-height"),
    result: document.querySelector(".result h1"),


    open(){
        Menu.botaoCal.classList.add('show')

    },
    close(){
        Menu.botaoCal.classList.remove('show')
    }
}





Menu.botaocalcular.addEventListener("click", ()=> {
    let resultado = IMC(Number(Menu.caixaPeso.value), Number(Menu.caixaAltura.value))

    if(resultado < 18.5){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Abaixo do Peso</span>`
    }else if(resultado >= 18.5 && resultado <= 24.9){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Peso Normal</span>`
    }else if (resultado >= 25 && resultado <= 29.9){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Sobrepeso</span>`
    }else if (resultado >= 30 && resultado <= 34.9){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau I</span>`
    }else if (resultado >= 35 && resultado <= 39.9){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau II</span>`
    }else {
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau II ou Morbida</span>`
    }

   Menu.open();

})

Menu.botaofechar.addEventListener("click", ()=> {
    Menu.close();
})


function IMC(peso, altura){
    let resultado = ((peso / ((altura * altura) / 100)) * 100).toFixed(2)
    return resultado
}