// const passport = require('passport'); //this is global at this point
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    passport.use(new LocalStrategy({
        //these are the field names
        //coming in the form
        usernameField: 'userName',
        passwordField: 'password'
    }, (username, password, done) => {
        // validate username/password
        const user = {
            username: username,
            password: password
        };
        done(null, user);
    }));
};