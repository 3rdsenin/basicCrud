const { timeStamp } = require('console');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: Schema.ObjectId,
    name: String,
    type: String,
    price: Number,
    quantity: Number,


}, { timeStamps: true });





const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;