/* 
Instale as bibliotecas e o cliente de API:
npm init
npm i express
Procure pela extensão RapidAPI Client no VSCode.
*/
// Para executar a API no terminal: node index.js
// Link para testar a API: http://localhost:3000/rota
const express = require("express")
const app = express()
const port = 3000
app.use(express.json()) // configura API para usar JSON.
const fs = require('fs') // importa leitura e escrita de arquivos.

app.post("/famosos" , (req, res) => {
    const famosos = req.body
    try {
        const bd = JSON.parse(fs.readFileSync("famosos.json", "utf8"))
        bd.push(famosos)
        fs.writeFileSync("famosos.json", JSON.stringify(bd), "utf8")
        res.status(201).json({resposta: "famoso cadastrado!"})
    }  catch (erro) {
        res.status(500).json({erro: erro.message})
    }

})

  app.get("/famosos", (req, res) => {
    try {
        const bd = JSON.parse(fs.readFileSync("famosos.json", "utf8"))
        res.status(200).json({resposta: bd})
    } catch(erro) {
        res.status(500).json({erro: erro.message})
    }
  })

  app.delete("/famosos/:id", (req, res) => {
    const id = req.params.id
    try {
        const bd = JSON.parse(fs.readFileSync("famosos.json", "utf8"))
        const indiceFamosos = bd.findIndex((famosos) => famosos.id ==id)
        if (indiceFamosos == -1) {
            return res.status(404).json({erro: "O famoso não existe"})
        }
        bd.splice(indiceFamosos, 1)
        fs.writeFileSync("famosos.json", JSON.stringify(bd), "utf8")
        res.status(200).json({resposta: "famoso excluido com sucesso"})
    } catch(error){
        res.status(500).json({erro: error.message})
    }
  })


// Execução da API:
app.listen(port, ()=>{
    console.log("API rodando na porta " + port)
})