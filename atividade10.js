const produtos = [
   {
       nome: "pão de queijo",
       valor: "R$ 60,00 kg",
       quantidade: 70,
       peso: 150,
       marca: "padaria Souza",
       codigo: 21,
   },
   {
       nome: "pão",
       valor: "R$ 30,00",
       quantidade: 200,
       peso: 70,
       marca: "padaria Souza",
       codigo: 32,
   },
   {
       nome: "pastel",
       valor: "R$ 12,00",
       quantidade: 29,
       peso:  400,
       marca: "padaria Souza",
       codigo: 40,
   },
   {
       nome: "risoles",
       valor: "R$ 10,00",
       quantidade: 40,
       peso:  400,
       marca: "padaria Souza",
       codigo: 30,
   },
   {
       nome: "refrigerantes 2l uliana ",
       valor: "R$ 11,00",
       quantidade: 80,
       peso:  2100,
       marca: "padaria Souza",
       codigo: 60,
   },
   {
       nome: "café ",
       valor: "R$ 12,00",
       quantidade: 23,
       peso:  300,
       marca: "padaria Souza",
       codigo: 67,
   },
   {
       nome: "hamburgão ",
       valor: "R$ 14,00",
       quantidade: 19,
       peso:  600,
       marca: "padaria Souza",
       codigo: 69,
   },
   {
       nome: "trufa ",
       valor: "R$ 8,00",
       quantidade: 24,
       peso:  400,
       marca: "padaria Souza",
       codigo: 12,
   },
   {
       nome: "creepe",
       valor: "R$ 7,00",
       quantidade: 46,
       peso:  300,
       marca: "padaria Souza",
       codigo: 55,
   },
   {
       nome: "misto quente ",
       valor: "R$ 6,00",
       quantidade: 20,
       peso:  250,
       marca: "padaria Souza",
       codigo: 10,
   },
]

   const produtosJSON = JSON.stringify(produtos)
console.log(produtosJSON)


// Criar o arquivo
const fs = require("fs")
fs.writeFileSync("produtos.json", produtosJSON)
 const prodtosArquivos = require("./produtos.json")
 console.log(alunosArquivo)

 produtosArquivo.forEach((produto)=>{
    console.log(produto.marca +
        " - codigo do produto: "  + produto.dt_codigo +
        " - valo " + produto.valor
        )
    }
)