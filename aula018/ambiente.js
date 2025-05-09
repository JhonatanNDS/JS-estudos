let num = [1,2,3,4] //criaçao do array
num[4] = 5 // adicionando elemento com indice
num.push(6) // adicionando elemento no final do array
console.log(num) 
num.sort() // alinhando em ordem crescente
console.log(num.length)

for(let pos in num){
    console.log(num[pos])
}

var posiçao = num.indexOf(3) // armazena a posiçao do elemento 3
console.log(posiçao)