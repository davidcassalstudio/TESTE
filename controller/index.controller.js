const Contatos = require('../model/contatos.model');

exports.getIndex = async (req, res, next) => {
    const contatos = await Contatos.find();

    res.render('index', {contatos}); 
}

exports.deleteItem = async (req, res, next) => {
    const id = req.params.id;
    
    if(id){
        await Contatos.deleteOne({_id: id})
        .then(data => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('Ocorreu um erro, tente novamente mais tarde.');
        })
    }
}