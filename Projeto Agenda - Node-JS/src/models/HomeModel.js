const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: {type: String}
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;