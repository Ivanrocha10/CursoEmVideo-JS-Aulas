var num = [5, 8, 2, 9, 3]
num.sort()
for (var pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

var p = num.indexOf(2)
if (p == -1) {
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor 5 está na posição ${p}`)
}
