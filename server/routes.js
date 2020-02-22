/**
 * Main application routes
 */

import errors from './components/errors';
import path from 'path';

import * as users from './api/users';
import * as recipes from './api/recipes';
import * as reviews from './api/reviews';

export default function(app) {
    app.use('/api/users', users.router);
    app.use('/api/recipes', recipes.router);

    //accept both, but first must be validated (:recipe_id must be valid)
    app.use('/api/recipes', reviews.router);
    app.use('/api/reviews', reviews.router);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}
