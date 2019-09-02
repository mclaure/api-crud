'use strict';

const Kudos = require("./schema/Kudos");
const mongoose = require("mongoose");

exports.list_kudos = (req, res, next) => {
    Kudos.find({},{id:1,remitente:1,destinatario:1,tema:1})
        .exec()
        .then(docs => {
           return res.status(200).json({
                "kudos": docs
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.add_kudos = (req, res, next) => {               
    const item = new Kudos({
        _id: mongoose.Types.ObjectId(),
        id: req.body.id,
        remitente: req.body.remitente,
        destinatario:req.body.destinatario,
        fecha: req.body.fecha,
        lugar: req.body.lugar,    
        tema: req.body.tema,      
        texto: req.body.texto             
    });

    item.save()
         .then(result => {
                res.status(200).json({
                    kudos:[item]
                });
          })
         .catch(err => {
            console.log(err);
    });
};

exports.del_kudos = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
                
    Kudos.deleteOne({id:id})
        .exec()
        .then(docs => {
            res.status(200).json( { deleted:true });
        })
        .catch(err => {
            console.log(err)
        });
};