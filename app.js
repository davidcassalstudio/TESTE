const express       = require('express');
const mongoose      = require('mongoose');
const app           = express();
const PORT          = process.env.PORT || 5000;
const indexRouter   = require('./routes/index.routes');
// const contatoRouter = require('./routes/contato.routes');
// const loginRouter   = require('./routes/login.routes');
const path          = require('path');


// console.log(process.env.USER)
// console.log(process.env.PASS)

// MongoDB Database Connection
//mongoose.connect('mongodb://127.0.0.1:27017/aguiasmartech')
// mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect("mongodb+srv://davidcassal:2wwSRyed2CvH3UpL@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority")
    .then(response => {
        console.log('Conectado com sucesso!');
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados, tente novamente mais tarde');
    })

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));



// Routes
//app.use(loginRouter);
app.use(indexRouter);
//app.use(contatoRouter);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT);
});