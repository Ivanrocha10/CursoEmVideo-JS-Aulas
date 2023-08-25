var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


function clicar() {
  var a = document.getElementById('area')
  a.innerText = "Clicou!"
  a.style.background = 'green'
}

function entrar() {
  var a = document.getElementById('area')
  a.innerText = 'Entrou!'
  a.style.background = 'blue'
}

function sair() {
  var a = document.getElementById('area')
  a.innerText = 'Saiu!'
  a.style.background = 'red'
}