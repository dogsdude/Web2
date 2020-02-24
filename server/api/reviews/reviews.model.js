//import mongoose from 'mongoose';
var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reviewsSchema = Schema({
  review_desc: {type: String, required: true},
  // TODO limit stars
  review_rating: {type: Number, required: true},
  date: {type: Date, default: Date.now, required: true},
  by_user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

let Review = mongoose.model('Review', reviewsSchema);

export {Review};
