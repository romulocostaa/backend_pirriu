const mongoose = require('mongoose');

const User = mongoose.model('Users');

module.exports = {
// Rota lista todos usuarios
    async index(req, res) {
        const users = await User.find();
        return res.json(users)
    },
// Rota criacao usuario
    async store(req, res) {
        const user = await User.create(req.body);
        return res.json(user)
    },
// Rota mostra usuario pelo id
    async show(req, res){
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
// Rota atualiza usuario
    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return user = res.json(user);
    },
// Rota deleta usuario
    async destroy(req, res){
        await User.findByIdAndRemove(req.params.id);
        return res.send()
    }
};