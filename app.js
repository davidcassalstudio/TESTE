const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 5000;

app.get('/', (req,res,next) => {
    res.send('Teste');
})


app.listen(PORT, () => console.log('Servidor rodando em localhost:5000'));