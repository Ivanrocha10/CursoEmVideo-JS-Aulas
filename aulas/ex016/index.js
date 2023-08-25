function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    img.src = 'image/fotomanha.png'
    document.body.style.background = '#DFB47E'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'image/fototarde.png'
    document.body.style.background = '#AE704D'
  } else {
    img.src = "image/fotonoite.png"
    document.body.style.background = '#041318'
  }
}
