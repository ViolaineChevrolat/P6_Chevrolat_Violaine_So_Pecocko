const Sauce = require('../models/Sauce');

exports.createSauce = (req, res, next) => {
    delete req.body.id;
    const sauce = new Sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res. status(201).json({message: 'Sauce enregistrée'}))
        .catch(error => res. status(400).json({ error: erreur }));
};

exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() => res.status(200).json({ message: 'sauce ajoutée'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ id: req.params.id }, { ...req.body, id: req.params.id })
    .then(() => res.status(200).json({ message: 'sauce supprimée'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getUneSauce = (req, res, next) => {
    Sauce.findOne( {id: req.params.id})
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(404).json({ error }));
};

exports.getToutesSauces = (req, res, next) => {
    Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};