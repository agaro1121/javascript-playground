const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

const router = () => {
    authRouter.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
            req.login(req.body, () => {
                res.redirect('/auth/profile');
            }); //allows us to tell passport this user is good to go
        });

    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), (req, res) => {
            res.redirect('/auth/profile');
        });

    authRouter.route('/profile')
        /*
        * Checks if a user is logged in
        * so no one can get to this route
        * */
        .all((req, res, next) => {
            if(!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get((req, res) => {
            console.log('json=',req.user);
            res.json(req.user);
        });

    return authRouter;
};

module.exports = router;