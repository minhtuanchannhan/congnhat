const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');

// Controllers
const UserController = require('../app/controllers/user');
const CompanyController = require('../app/controllers/company');
const CategoryController = require('../app/controllers/category');
const TypeController = require('../app/controllers/type');
const LocationController = require('../app/controllers/category');
const JobController = require('../app/controllers/job');

require('../app/middleware/passport')(passport);

// User
router.post('/users/create', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users/:email', passport.authenticate('jwt', {
	session: false
}), UserController.get);
router.put('/users/update', passport.authenticate('jwt', {
	session: false
}), UserController.update);

// Category
router.get('/categories', CategoryController.list);
router.get('/categories/:id', CategoryController.get);

// Type
router.get('/types', TypeController.list);
router.get('/types/:id', TypeController.get);

// Location
router.get('/locations', LocationController.list);
router.get('/locations/:id', LocationController.get);

// Job
router.get('/jobs', JobController.list);
router.get('/jobs/:id', JobController.get);
router.post('/jobs/create', JobController.create);

module.exports = router;
