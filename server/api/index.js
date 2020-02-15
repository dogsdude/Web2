import express from 'express';
import * as controller from './users/users.controller';

let router = express.Router();

// // GET methods
// router.get('/', controller.index);
// router.get('/:id', controller.show);
//
// // POST method
// router.post('/', controller.create);
//
// // PUT method
// router.put('/:id', controller.update);
//
// // DELETE method
// router.delete('/:id', controller.destroy);

// for sub resource:
// router.postReview('/recipe/:name/review/:username');
//recipes/1/reviews/(whatever)

router.get('/', controller.index);

export {router};
