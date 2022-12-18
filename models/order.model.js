const { timeStamp } = require('console');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    id: Schema.ObjectId,
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    userid: String,
    total_price: Number

}, { timeStamps: true });





const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;