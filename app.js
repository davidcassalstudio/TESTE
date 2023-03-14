const express       = require('express');
const app           = express();
const PORT          = process.env.PORT || 5000;
const homeRouter    = require('./routes/home.routes');
const contatoRouter = require('./routes/contato.routes');
const loginRouter   = require('./routes/login.routes');
const path          = require('path');
// const mongoose      = require('mongoose');


// console.log(process.env.USER)
// console.log(process.env.PASS)

// MongoDB Database Connection
//mongoose.connect('mongodb://127.0.0.1:27017/aguiasmartech')
// mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority`)
// mongoose.connect(`mongodb+srv://davidcassal:2wwSRyed2CvH3UpL@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority`)
//     .then(response => {
//         console.log('Conectado com sucesso!');
//     })
//     .catch(error => {
//         console.error('Não foi possível conectar ao banco de dados, tente novamente mais tarde');
//     })

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));



// Routes
app.use(loginRouter);
app.use(homeRouter);
app.use(contatoRouter);

app.listen(PORT, () => console.log('Servidor rodando em localhost:5000'));