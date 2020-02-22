import mongoose from 'mongoose';
let Schema = mongoose.Schema;


let usersSchema = Schema({
  fullName: {type: {
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true},
  }, required: true},
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true}
});

let User = mongoose.model('User', usersSchema);

// Export the model User
export {User};
