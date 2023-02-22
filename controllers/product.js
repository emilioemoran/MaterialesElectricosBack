const Sequelize     = require('sequelize');
const producto       = require('../models/index').Product;
module.exports = {
 create(req, res) {
    return producto
        .create ({
             //username: req.params.username,
             //status: req.params.status
        })
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return producto.findAll({})
        .then(producto => res.status(200).send(producto))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return producto.findAll({
         where: {
             //username: req.params.username,
         }
     })
     .then(producto => res.status(200).send(producto))
     .catch(error => res.status(400).send(error))
  },
};