const { request } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 5000
//const rand = require("randomUUID")
const mysql = require('mysql2')


const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (request, response)=>{
    return response.render('cadastrar')
  });

const produtos = []


app.post('/cadastrar', (request, response) =>{
  
    const {titulo, categoria, descricao, preco, disponibilidade} = request.body

    const produto = {
        titulo,
        categoria,
        descricao,
        preco,
        disponibilidade
    }

    produtos.push(produto)
    if(error){
      console.log(error)
    }
    //return response.json(produto);
    return response.render("cadastrar")

});


app.get('/', (request, response)=>{
    return response.render('home')
  });
  

app.put("/produtos:id", (request, response) => {

        const { id } = request.params

        const {titulo, categoria, descricao, preco, disponibilidade} = request.body

        const produto = {
          titulo,
          categoria,
          descricao,
          preco,
          disponibilidade
      }

        const produtos = findIndex(id === "id")

        produtos.splice(produto)

        return response.json(produto)
    });



app.delete("/produtos:id", (request, response) => {
    
    const { id } = request.params

    const produtos = findIndex(id === "id")

    produtos.splice(produto)

    return response.json(produto)


});


  app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}👍`)
  });


  //const InsertSql = mysql2.InsertSql(mysql.createConnection, )