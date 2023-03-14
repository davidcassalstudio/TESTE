const express = require('express');
const router  = express();
const mongoose      = require('mongoose');


// console.log(process.env.USER)
// console.log(process.env.PASS)

// MongoDB Database Connection
//mongoose.connect('mongodb://127.0.0.1:27017/aguiasmartech')
// mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://davidcassal:2wwSRyed2CvH3UpL@cluster0.akxf9rd.mongodb.net/?retryWrites=true&w=majority`)
    .then(response => {
        console.log('Conectado com sucesso!');
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados, tente novamente mais tarde');
    })

router.get('/', (req,res,next) => {
    res.send('Foi erro meu')
})

module.exports = router;