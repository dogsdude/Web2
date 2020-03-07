
'use strict';
import {Review} from './reviews.model';

import {Recipe} from "../recipes/recipes.model";


export function index(req,res) {
  Review.find()
    .exec()
    .then(function(review) {
      res.json({
        review
      });
    })
    .catch(function(err) {
      res.status(500);
      res.send(err);
    });
}


export function show(req, res) {
  Review.findById(req.params.reviewID)
    .exec()
    .then(function(existingReview) {
      if (existingReview) {
        res.status(200);
        res.json(existingReview);
      } else {
        res.status(404);
        res.json({message: "404 Not Found"});
      }
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
    })

}


export function create(req, res) {

  //  step 1. look up recipe to see if it exists otherwise throw an error (404 or 400)
  //  step 2. create review
  //  step 3. add to recipe
  //  step 4. save (.increment.save)

    let review = req.body;
    Recipe.findById(req.params.recipeID)
      //.populate('user_reviews')
      .exec()
      .then(function(recipe) {
        if(recipe) {
          if((req.body.review_rating > 5) || (req.body.review_rating < 1)){
            res.status(400);
            res.json({message:"Rating must be between 1-5"});
          }
          else if((req.body.review_rating%1)!= 0){
            res.status(400);
            res.json({message:"Rating must be a whole number"})
          }
          Review.create(review)
            // another .then
            .then(function(createdReview) {
              recipe.user_reviews.push(createdReview._id);
              console.log("array: " + recipe.user_reviews);
              return Promise.all([
                createdReview.increment().save(),
                recipe.increment().save()
            ]);
        })
            .then(function(savedObjects) {
              res.status(201);
              res.json(savedObjects[0]);
            })
        } else {
          res.status(400);
          res.json({message: "Recipe Doesn't Exist"});
        }
      })
      .catch(function(err) {
        res.status(400);
        res.send(err);
      })
}
//
export function update(req, res) {
  Review.findById(req.params.reviewID)
    .exec()
    .then(function(existingReview) {
      if(existingReview) {
        if((req.body.review_rating > 5) || (req.body.review_rating < 1)){
          res.status(400);
          res.json({message:"Rating must be between 1-5"});
        }
        else if((req.body.review_rating%1)!= 0){
          res.status(400);
          res.json({message:"Rating must be a whole number"})
        }
        existingReview.review_desc = req.body.review_desc;
        existingReview.review_rating = req.body.review_rating;
        //should not be able to change date (date of creation will always be the same)
        //should not be able to change user (user info may change, but objectID stays the same)
        return Promise.all( [existingReview.increment().save()
        ]);
      } else {
        return existingReview;
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

export function destroy(req, res) {
  Review.findById(req.params.reviewID)
    .exec()
    .then(function(existingReview) {
      if(existingReview) {
        return Promise.all([existingReview.remove()]);
      } else {
        return existingReview; // returning null
      }
    })
    .then(function(deletedReview) {
      if(deletedReview) {
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


