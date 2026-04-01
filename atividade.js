let produtos = ["Chuteira", "Calção", "Tênis", "Boné", "Meia", "Moletom", "Jeans", "Chapéu", "Cinto", "Brincos"]
let precos = [99.90, 49.90, 199.90, 29.90, 9.90, 109.90, 189.90, 39.90, 29.90, 19.90]

console.log("ESTOQUE:")
for(let i = 0; i < 10; i++) {
    console.log(produtos[i], "-R$", precos[i])
}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Escolha o seu produto: ", function(novo) {
    rl.question("Preço: ", function(preco_novo) {
        produtos.push(novo)
        precos.push(Number(preco_novo))
       
        console.log("NOVO ESTOQUE:")
        for(let i = 0; i < produtos.length; i++) {
            console.log(produtos[i], "-R$", precos[i])
        }
       
        rl.question("Numero do produto 0, 1, 2,...: ", function(indice) {
            produtos.splice(indice, 1)
            precos.splice(indice, 1)
           
            console.log("ESTOQUE FINAL:")
            for(let i = 0; i < produtos.length; i++) {
                console.log(produtos[i], "-R$", precos[i])
            }
            rl.close()
        })
    })
})

