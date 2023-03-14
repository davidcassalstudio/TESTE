const express    = require('express');
const app        = express();
const PORT       = process.env.PORT || 5000;
const homeRouter = require('./routes/home.routes');
const path       = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));


app.use(homeRouter);

app.listen(PORT, () => console.log('Servidor rodando em localhost:5000'));