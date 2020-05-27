const Post = require('../models/Post');

module.exports = {
    show: function(req, res) {
        Post.find({}, (err,items) => {
            if(!err){
                res.json(items);
            }else{
                res.sendStatus(500);
                console.log(err);
            }
        });
    },
    create: function(req, res) {
        let obj = new Post;
        obj.titulo = req.body.titulo;
        obj.descripcion = req.body.descripcion;
        obj.categoria = req.body.categoria;
        obj.fecha = req.body.fecha;
        obj.comentarios = req.body.comentarios;
        obj.save((err, newData)=>{
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.json(newData);
            }
        });
    },
    update: function(req, res) {    
        let val_id = req.params.id;
         
        let datos = {
            titulo : req.body.titulo,
            descripcion : req.body.descripcion,
            categoria : req.body.categoria,
            fecha : req.body.fecha
        }; 

        Post.findByIdAndUpdate({_id:val_id}, datos, (err, newData) => {
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else {
                res.send(newData);
            }

        });
    },
    
    delete: function(req, res) {    
        let val_id = req.params.id;
        Post.deleteOne({_id: val_id}, (err) => {
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else {
                res.sendStatus(200); 
            }
        })

    }
};