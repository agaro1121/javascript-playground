const express = require('express');
const authRouter = express.Router();

const router = () => {
    authRouter.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
            req.login(req.body, () => {
                res.redirect('/auth/profile');
            }); //allows us to tell passport this user is good to go
        });

    authRouter.route('/profile')
        .get((req, res) => {
            console.log('json=',req.user);
            res.json(req.user);
        });

    return authRouter;
};

module.exports = router;