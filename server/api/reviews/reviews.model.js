//import mongoose from 'mongoose';
var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reviewsSchema = Schema({
  review_desc: {type: String, required: true},
  //todo: limit number of stars for rating?
  review_rating: {type: Number, required: true},
  // TODO ohgod ohgod awjeez does this work? date.now()
  date: {type: Date, default: Date.now, required: true},
  by_user: {type: Schema.Types.ObjectId, ref: 'users', required: true}
});

let Review = mongoose.model('Review', reviewsSchema);

export {Review};
