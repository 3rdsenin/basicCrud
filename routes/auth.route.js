const passport = require('passport');

const router = require('express').Router();




//Sign up
router.post('/', async(req, res, next) => {
   passport.authenticate('signup', { session: false }, async (err, user, info) => {
        if (err) {
            next(err);
        }

        if (!user) {
            return res.status(400).json(info);
        } else {
            return res.status(200).json(info);
        }
   })
});



module.exports = router;



