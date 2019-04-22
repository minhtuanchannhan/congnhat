const {
	ExtractJwt,
	Strategy
} = require('passport-jwt');
const {
	User
} = require('../models');
const config = require('../../config/config');
const {
	to
} = require('../services/util.service');

module.exports = function (passport) {
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.jwt_encryption;

	passport.use(new Strategy(opts, async function (jwt_payload, done) {
		let err, user;

		[err, user] = await to(User.findOne({
			where: {
				email: jwt_payload.email
			}
		}));

		if (err) return done(err, false);

		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	}));
};
