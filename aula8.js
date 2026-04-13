
//let produtos = ["Chuteira", "Calção", "Tênis", "Boné", "Meia", "Moletom", "Jeans", "Chapéu", "Cinto", "Brincos"]
//let precos = [99.90, 49.90, 199.90, 29.90, 9.90, 109.90, 189.90, 39.90, 29.90, 19.90]

//console.log("ESTOQUE:")
//for(let i = 0; i < 10; i++) {
    //console.log(produtos[i], "-R$", precos[i])


//const readline = require("readline")
//const rl = readline.createInterface({
    //input: process.stdin,
    //output: process.stdout


//rl.question("Escolha o seu produto: ", function(novo) {
   // rl.question("Preço: ", function(preco_novo) {
        //produtos.push(novo)
       // precos.push(Number(preco_novo))
       
        //console.log("NOVO ESTOQUE:")
        //for(let i = 0; i < produtos.length; i++) {
           // console.log(produtos[i], "-R$", precos[i])
        
       // PEGAR O PROJETO 1 E TRADUZIR PARA OBJETOS
// CRIAR MAIS 2 CHAVES (Exemplo: quantidade e peso)
// CRIAR 3 "Mostrar estoque", usando:
//      1 - while
//      2 - forEach
//      3 - for
        //rl.question("Numero do produto 0, 1, 2,...: ", function(indice) {
            //produtos.splice(indice, 1)
           // precos.splice(indice, 1)
           
            //console.log("ESTOQUE FINAL:")
            //for(let i = 0; i < produtos.length; i++) {
          // PEGAR O PROJETO 1 E TRADUZIR PARA OBJETOS
// CRIAR MAIS 2 CHAVES (Exemplo: quantidade e peso)
// CRIAR 3 "Mostrar estoque", usando:
//      1 - while
//      2 - forEach
//      3 - for      console.log(produtos[i], "-R$", precos[i])
            
            //rl.close()
// PEGAR O PROJETO 1 E TRADUZIR PARA OBJETOS
// CRIAR MAIS 2 CHAVES (Exemplo: quantidade e peso)
// CRIAR 3 "Mostrar estoque", usando:
//      1 - while
//      2 - forEach
//      3 - for

const mercado = [
    {
        nome: "chuteira",
        preco: 99,
        quantidade: 32,
        peso: "350 g",
        cor: "vermelha e preta",
    },

    {
        nome: "calção",
        preco: 45,
        quantidade: 109,
        peso: "60 g",
        cor: "vermelho",

    }
]

function mostrarESTOQUE() {
    let contador = 0 
    while(contador <mercado.lenght){
         console.log(contador + " - " + mercado[contador].nome + " -R$ " + mercado[contador].preco + " - quantidade: " + mercado[contador].quantidade )
         console++

    }
}
function mostrarESTOQUE (){
    mercado.forEach((produto) => {
        console.log(produto.nome + "- R$ " + produto.preco + "- quantidade: + " + produto.quantidade)

    })
}
mostrarESTOQUE()

 
    
