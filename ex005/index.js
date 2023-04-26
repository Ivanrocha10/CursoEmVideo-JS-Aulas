var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
document.write('Está escrito assim: ' + p1.innerText)
p1.style.color = 'red'
corpo.style.background = 'black'

var d = document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'Estou aguardando...'

var p = document.getElementsByName('vasc')[0]
p.innerText = 'Olá!'
p.style.background = 'yellow'
p.style.color = 'black'

var f = document.getElementsByClassName('fla')[0]
f.style.background = 'red'

var n = document.querySelector('div#not')
n.style.background = 'blue'