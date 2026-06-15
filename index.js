//npm init
//nmp i express
//install a extenção
const express = require ("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')


app.get("/ola", (req, res) => {
   res.json({resposta: "Olá mundo!"})
})

app.post("/clientes", (req, res) => {
    const cliente = req.body
    //abrir o arquirvo
    try{
        const bd = JSON.parse(fs.readdilesSync("bd.json", "utf-8"))
        bd.push(cliete)
        fs.weiteFileSync("bd.json", JSON.stringify(bd), "utf-8")
    } catch (erro){
        res.status(500).json({erro:erro.mensage})
        

    }
    //adicionar o cliente 
    //salvar o arquivo
    //resposta
    
})


app.listen(port, ()=>{
   console.log("API rodando na porta" + port)
})

