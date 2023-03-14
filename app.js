const express    = require('express');
const app        = express();
const PORT       = process.env.PORT || 5000;
const homeRouter = require('./routes/home.routes');


app.use(homeRouter);

app.listen(PORT, () => console.log('Servidor rodando em localhost:5000'));