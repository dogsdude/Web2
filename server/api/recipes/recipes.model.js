import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let recipesSchema = Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  img_url: {type: String, required: true},
  prep_time: {type: Number, required: true},
  cook_time: {type: Number, required: true},
  directions: {type: [String], required: true},
  ingredients: {type: [{ingredient_name: {type: String, required: true}}], required: true},
  user_reviews: [{type: Schema.Types.ObjectId, ref: 'Review', required: true}]
});

let Recipe = mongoose.model('Recipe', recipesSchema);

export {Recipe};
