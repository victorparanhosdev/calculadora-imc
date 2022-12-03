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

botaocalcular.addEventListener("click", ()=> {
   Menu.open();
})

botaofechar.addEventListener("click", ()=> {
    Menu.close();
})