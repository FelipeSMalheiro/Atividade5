/*



*/

//Uma função que devolve os valores que são maiores que a média
const meuArray = [4, 22, 9, 40, 5]

function MMaior(a) {
    let soma = 0
    for (let i = 0; i < a.length; i++) {
        soma += a[i]
    }
    
    return soma/a.length
}
const media = meuArray.filter(num => num > 20)
console.log(media)


//Uma função que devolva o menor valor da lista
function Menor(b){
    
    let menor = b[0]

    for(let i = 1; i < b.length; i++){
       
        if(b[i] < menor){
            menor = b[i]
        }
    }
    return menor
}
let menorB = Menor(meuArray)
console.log(menorB)


//Uma função que devolva o valor da soma dos itens da lista
function soma(c) {
    let soma = 0
    for (let i = 0; i < c.length; i++) {
        soma += c[i]
    }
    return soma
}

const ArraySoma = [1, 2, 3, 4, 5]
const somac = soma(meuArray)
console.log(somac)


//Uma função que devolva todos os valores que são menores que 20
function menor20(d) {
    
    let menoresQue20 = d.filter(function(menor20) {
      return menor20 < 20
    })
  
    return menoresQue20
  }
  let menorQ20 = menor20(meuArray)
  console.log(menorQ20)


  //Uma função que vai devolver o primeiro e o último valor da lista
  function PrieUlt (e) {
    return [e[0], e[e.length-1]]
  }
  let PeU = PrieUlt(meuArray)
  console.log(PeU)