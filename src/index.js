require('./config/config');
const express = require('express');
const app = express();


// Middlewares
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.json('Hello world');
});

app.get('/usuarios', (req, res) => {
  res.json('get usuario');
});

app.post('/usuarios', (req, res) => {
  let { body } = req; 
  if(body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      message: 'El nombre es necesario'
    });
  } else {
    res.json({
      persona: body
    })
  }
})

app.listen(process.env.PORT, (err) => {
  if(err) throw new Error(err);
  console.log('Servidor en el puerto ' + 3000);
})