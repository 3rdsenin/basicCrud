const passport = require('passport');

const router = require('express').Router();




//Sign up
router.post('/signup', async(req, res, next) => {
   passport.authenticate('signup', { session: false }, async (err, user, info) => {
        if (err) {
            next(err);
        }

        if (!user) {
            return res.status(400).json(info);
        } else {
            return res.status(201).json({user, message: info});
        }
   })
});


router.post('/signin', async(req, res, next) => {
    passport.authenticate('signin', async(err, user, info) => {
        try {
            if (!user) {
                return res.status(400).json(info);
            }
            req.login(
                user,
                {session: false},
                async(error) => {
                    if (error) {
                        next(error);
                    }
                    const tokenObject = { _id: user._id, email: user.email };
                    const token = jwt.sign({ user: tokenObject }, process.env.JWT_SECRET, { expiresIn: '1hr'});
                    return res.json({ info, token });
                }
            )
        } catch(error) {
            next(error);
        }
    })(req, res, next);
})





module.exports = router;



