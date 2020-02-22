import express from 'express';

import * as controller from './reviews.controller';

let router = express.Router();

router.get('/', controller.index);
router.get('/:recipeID/reviews', controller.index);

router.get('/:reviewID', controller.show);
router.get('/:recipeID/reviews/:reviewID', controller.show);

router.post('/:recipeID/reviews', controller.create);

router.put('/:reviewID', controller.update);
router.put('/:recipeID/reviews/:reviewID', controller.update);

router.delete('/:reviewID', controller.destroy);
router.delete('/:recipeID/reviews/:reviewID', controller.destroy);

export{router};
