import { Menu } from './menu.js'

Menu.botaocalcular.addEventListener("click", ()=> {
 
    let peso = Number(Menu.caixaPeso.value)
    let altura = Number(Menu.caixaAltura.value)
    let resultado = IMC(peso, altura)

    let validacao = notIsNumber(peso) || notIsNumber(altura)

    if(validacao){
        Menu.alertError.classList.add('erro');
        return
    }

    if(resultado < 18.50){
            
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Abaixo do Peso</span>`
         
    }else if(resultado >= 18.50 && resultado <= 24.99){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Peso Normal</span>`
       
    }else if (resultado >= 25 && resultado <= 29.99){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Sobrepeso</span>`
    
       
    }else if (resultado >= 30 && resultado <= 34.99){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau I</span>`
        
    }else if (resultado >= 35 && resultado <= 39.99){
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau II</span>`
      
    }else {
        Menu.result.innerHTML = `Seu IMC é de ${resultado}kg/m2<br><span>Classificação: Obesidade Grau II ou Morbida</span>`
            
    }


    Menu.open();       
    Menu.caixaPeso.value = ''
    Menu.caixaAltura.value = ''        
    }

)

Menu.botaofechar.addEventListener("click", ()=> {
    Menu.close();
})


function notIsNumber(valor){
    return isNaN(valor) || valor == ""
}

function IMC(peso, altura){
    let alturaConvertida = altura / 100
    let resultado = peso / (alturaConvertida * alturaConvertida)
    return (resultado).toFixed(2)
}

Menu.caixaAltura.oninput = () => Menu.alertError.classList.remove("erro")
Menu.caixaPeso.oninput = () => Menu.alertError.classList.remove("erro")





