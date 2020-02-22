
'use strict';
import {Recipe} from './recipes.model';

import {Review} from '../reviews/reviews.model';


export function index(req,res) {
  Recipe.find()
    .populate("user_reviews")
    .exec()
    .then(function(recipe) {
      console.log(recipe.user_reviews);
      res.json({
        recipe
      });
    })
    .catch(function(err) {
      res.status(500);
      res.send(err);
    });
}


export function show(req, res) {
  Recipe.findById(req.params.id)
    .populate('user_reviews')
    .exec()
    .then(function(existingRecipe) {
      if (existingRecipe) {
        res.status(200);
        res.json(existingRecipe);
      } else {
        res.status(404);
        res.json({message: "404 Not Found!"});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    })

}

export function create(req, res) {

  var recipe = req.body;

  Recipe.create(recipe)
    .then(function(createdRecipe) {
      res.status(201);
      res.json(createdRecipe);
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    })
}

export function update(req, res) {
  Recipe.findById(req.params.id)
    .populate('user_reviews')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        existingRecipe.name = req.body.name;
        existingRecipe.description = req.body.description;
        existingRecipe.img_url = req.body.img_url;
        existingRecipe.prep_time = req.body.prep_time;
        existingRecipe.cook_time = req.body.cook_time;
        existingRecipe.directions = req.body.directions;
        existingRecipe.ingredients = req.body.ingredients;
        return Promise.all( [existingRecipe.increment().save()
        ]);
      } else {
        return existingRecipe;
      }
    })
    .then(function(savedObjects) {
      if(savedObjects) {
        res.status(200);
        res.json(savedObjects[1]);
      } else {
        res.status(404);
        res.json({message: "Not Found"});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}

// SHOULD ALSO DELETE ALL THE REVIEWS
// call a destroy on every index in your review array
export function destroy(req, res) {
  Recipe.findById(req.params.id)
    .populate('user_reviews')
    .exec()
    .then(function(existingRecipe) {
      if(existingRecipe) {
        for (var i=0; i < existingRecipe.user_reviews.length; i++) {
          Review.findById(existingRecipe.user_reviews[i])
            .exec()
            .then(function(review) {
              review.remove();
            })
            .catch(function(err) {
              res.status(400);
              res.send(err);
            })
        }
        return Promise.all([existingRecipe.remove()]);
      } else {
        return existingRecipe; // returning null
      }
    })
    .then(function(deletedRecipe) {
      if(deletedRecipe) {
        res.status(204).send();
      } else {
        res.status(404);
        res.json({message: "Not Found"});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    });
}


