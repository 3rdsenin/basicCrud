const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Schema.ObjectId,
    firstname: { type: String, required: [true, "Please provide firstname"] },
    lastname: { type: String, required: [true, "Please provide lastname"] },
    username: { type: String, required: [true, "Please provide username"], unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }

});

UserSchema.pre('save', async(next) => {

    hashedpassword = bcrypt.hash(this.password, 10);
    this.password = hashedpassword;
    next();

});

UserSchema.methods.isValidPassword = async(password) => {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};


const User = mongoose.model("User", UserSchema);
module.exports = User;