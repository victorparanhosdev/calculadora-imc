export const Menu = {
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

