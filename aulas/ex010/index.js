
function calcular() {
  var velo = document.getElementById('vel')
  var res = document.getElementById('res')
  var velocidade = Number(velo.value)

  res.innerHTML = `Sua velocidade atual é de <strong>${velocidade} Km/h</strong> `
  if (velocidade > 60) {
    res.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade</p>`
  }

  res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
}