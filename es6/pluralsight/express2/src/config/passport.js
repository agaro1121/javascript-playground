const passport = require('passport');


module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    /*
    * Goes into the session
    * */
    passport.serializeUser((user, done) => {
        done(null/*normally error*/, user)
        /*
        * So if we saved user.id
        * then below would be:
        * passport.deserializeUser((userId, done)
        * */
    });

    /*
    * Gets pulled out of the session
    * */
    passport.deserializeUser((user, done) => {
        // find  user in DB
        done(null/*normally error*/, user)
    });

    /*
    * Passport Strategies
    * */
    require('../strategies/local.strategy')(passport);


};