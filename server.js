const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//INICIANDO APP
const app = express();
app.use(express.json()); // PERMITIR QUE ENVIA DADOS EM JSON PARA APLICAÇÃO
app.use(cors());
//INICIANDO O DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true ,useUnifiedTopology: true});

requireDir('./src/models');

//ROTAS
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);