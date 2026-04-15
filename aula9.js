const alunos = [ {
    nome: "joão chiquito",
    dt_nasc: "26/04/26",
    serie_fav: "invencivel"
},
 {
    nome: "Jurimó",
    dt_nasc: "26/04/79",
    serie_fav: "invencivel"
}, 
{
    nome: "jacilda",
    dt_nasc: "26/04/80",
    serie_fav: "invencivel"
},
]
//criar JNSO
const alunosJNSO = JNSO.stringify(alunos)
console.log(alunos)
//criar arquivo
const fs = require("fs")
fs.writeFileSync("alunos.json", alunosJSON)
 //ler arquivo
 const alunosArquivo = require("./alunos.json")
 console.log(alunosArquivo)
 //mostrar os dados do arquivo arganizadamente
 //alunosArquivo.forEach()...S