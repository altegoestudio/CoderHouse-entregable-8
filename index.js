const express = require('express');
const productos =  require('./api/productos');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/prodcutos/listar',(req,res)=>{
  res.send(productos.lista)
});

app.get('/api/prodcutos/listar/:id',(req,res)=>{
  let producto = productos.getProductById(req.params.id);
  res.send(producto);
});
  
app.post('/api/prodcutos/guardar',(req,res)=>{
  let nuevoProducto = productos.identificador(req.body)
  console.log(nuevoProducto);
  productos.lista.push(nuevoProducto)
  res.send(req.body)
});


const puerto = 8080;
const server = app.listen(puerto,()=>{
  console.log(`servidor escuchando en http://localhost:${puerto}`);
})

server.on('error', error => {
    console.log('error en el servidor:', error);
});
