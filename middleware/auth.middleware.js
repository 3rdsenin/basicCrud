const UserModel = require('../models/user.model');
const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');


//Retriev and very access token
passport.use(new jwtStrategy(
    {
        secretOrKey: 'JWT_SECRET',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async(token, done) => {
        try {
            const user = await token.user;
            return done(null, user);
        } catch(error) {
            done(error);
        }
    }
));


//Passport local strategy signup
passport.use('signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async(req, email, password, done) => {
            try {
                //First, check whether user with the email provided already exists.
                const oldUser = await UserModel.findOne({ email });
                if (oldUser) {
                    return done(null, false, { message: "A user with this email already exists."});
                } else {
                    //If the email does not exist, signup user.
                    const body = req.body;
                    let user = await UserModel.create({ firstName: body.firstName, lastName: body.lastName, email, password });
                    // delete user.password;
                    const { password, ...others} = user._doc;
                    return done(null, {user: others}, { message: "Signup was successful."});
                }
            } catch(error) {
                done(error);
            }
        }
    )
);


//Passport local strategy signin
passport.use('signin', 
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async(email, password, done) => {
            try {
                const user = await UserModel.findOne({ email });
                if (!user) {
                    return done(null, false, { message: "User not found." });
                }
                
                const isValidPassword = await user.isValidPassword(password);
                if (!isValidPassword) {
                    return done(null, false, {message: "Invalid password" });
                }

                const { password, ...others} = user._doc;
                const userWithoutPassword = others;
                return done(null, {user: userWithoutPassword }, { message: `Welcome back ${user.firstName}.`});             
            } catch(error) {
                done(error);
            }
        }
    )
);