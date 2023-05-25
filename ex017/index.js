function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO]')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', './assets/homem-criança.png')
        document.body.style.background = '#E0AF30'
      } else if (idade < 23) {
        //Jovem
        img.setAttribute('src', './assets/homem-jovem.png')
        document.body.style.background = '#5F6368'
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', './assets/homem-adulto.png')
        document.body.style.background = '#335359'
      } else {
        //Idoso
        img.setAttribute('src', './assets/homem-idoso.png')
        document.body.style.background = '#2C4D64'
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', './assets/mulher-criança.png')
        document.body.style.background = '#282017'
      } else if (idade < 23) {
        //Jovem
        img.setAttribute('src', './assets/mulher-jovem.png')
        document.body.style.background = '#0673AD'
      } else if (idade < 50) {
        //Adulta
        img.setAttribute('src', './assets/mulher-adulta.png')
        document.body.style.background = '#022161'
      } else {
        //Idosa
        img.setAttribute('src', './assets/mulher-idosa.png')
        document.body.style.background = '#191E18'
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
