const Menu = {
    botaoCal: document.querySelector(".modal"),

    botaocalcular: document.querySelector("#btn-calculo"),
    botaofechar: document.querySelector(".img-close"),
    caixaPeso: document.querySelector("#input-weight"),
    caixaAltura: document.querySelector("#input-height"),
    result: document.querySelector(".result h1"),
    alertError: document.querySelector(".alert-error"),


    open(){
        Menu.botaoCal.classList.add('show')

    },
    close(){
        Menu.botaoCal.classList.remove('show')
    }
}






Menu.botaocalcular.addEventListener("click", ()=> {
 
    let peso = Number(Menu.caixaPeso.value)
    let altura = Number(Menu.caixaAltura.value)
    let resultado = IMC(peso, altura)

    if(peso != Number && peso == ''){
        Menu.alertError.classList.add('erro')
   
        

    } else if(altura != Number && altura == ''){
        Menu.alertError.classList.add('erro')
       
    

    }else {

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
        Menu.alertError.classList.remove("erro")
        
    }


  

})

Menu.caixaAltura.oninput = () => Menu.alertError.remove("erro")
Menu.caixaPeso.oninput = () => Menu.alertError.remove("erro")



Menu.botaofechar.addEventListener("click", ()=> {
    
    Menu.close();
})


function IMC(peso, altura){
    let alturaConvertida = altura / 100
    let resultado = peso / (alturaConvertida * alturaConvertida)
    return (resultado).toFixed(2)
}