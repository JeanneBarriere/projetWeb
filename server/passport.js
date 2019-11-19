/*
//const router = express.router();
const bodyParser = require('body-parser');
const
router.use(bodyParser.urlencoded({ extended: true }));

//router.get('/', (req, res) => res.sendFile('logIn', { root : __dirname}));

//const port = process.env.PORT || 3000;
//router.listen(port , () => console.log('App listening on port ' + port));

const passport = require('passport');
router.use(passport.initialize());
router.use(passport.session());

//router.get('/success', (req, res) => res.send("Welcome "+req.query.firstName+"!!"));
//router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(mail, password, done) {
      User.findOne({
        mail: mail
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));

router.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?mail='+req.user.firstName);
  });

module.exports = router;*/
