var express = require('express');
var router = express.Router();

var db = require('../queries');

/**
 * @swagger
 * definitions:
 *   Platform:
 *     properties:
 *       name:
 *         type: string
 *       url:
 *         type: string
 *
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       joinDate:
 *         type: string
 *
 *   Review:
 *     properties:
 *       date:
 *         type: string
 *       feedback:
 *         type: string
 *       rating:
 *         type: string
 *       writtenBy:
 *         type: string
 *       platformName:
 *         type: string
 *       userName:
 *         type: string
 *
 */

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *       - Platform
 *     description: Return all Online Platforms
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of online platforms
 *         schema:
 *           $ref: '#/definitions/Platform'
 */
router.get('/api/platforms', db.getAllPlatforms);

/**
 * @swagger
 * /api/platform:
 *   post:
 *     tags:
 *       - Platform
 *     description: Creates a new Online Platform
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Platform
 *         description: Platform object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Platform'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/platform', db.createPlatform);

/**
 * @swagger
 * /api/platforms/{platformName}:
 *   get:
 *     tags:
 *       - Platform
 *     description: Returns a single Platform Data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: platformName
 *         description: platform's name
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single platform
 *         schema:
 *           $ref: '#/definitions/Platform'
 */
router.get('/api/platforms/:platformName', db.getSinglePlatform);

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - User
 *     description: Return all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/api/users', db.getAllUsers);

/**
 * @swagger
 * /api/user:
 *   post:
 *     tags:
 *       - User
 *     description: Create a new User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/users', db.createUser);


/**
 * @swagger
 * /api/users/{userName}:
 *   get:
 *     tags:
 *       - User
 *     description: Returns a single User Data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: user's name
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/api/users/:userName', db.getSingleUser);

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     tags:
 *       - Review
 *     description: Return all Reviews
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of reviews
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.get('/api/reviews', db.getAllReviews);

/**
 * @swagger
 * /api/reviews/platform/{platformName}:
 *   get:
 *     tags:
 *       - Review
 *     description: Return all Reviews by specific platform
 *     produces:
 *       - application/json
 *     parameters:
*       - name: platformName
*         description: platform's name
*         in: path
*         required: true
*         type: string
 *     responses:
 *       200:
 *         description: An array of reviews by specific platform
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.get('/api/reviews/platform/:platformName', db.getAllReviewsByPlatform);

/**
 * @swagger
 * /api/reviews/user/{userName}:
 *   get:
 *     tags:
 *       - Review
 *     description: Return all Reviews by specific user
 *     produces:
 *       - application/json
 *     parameters:
*       - name: userName
*         description: user's name
*         in: path
*         required: true
*         type: string
 *     responses:
 *       200:
 *         description: An array of reviews by specific user
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.get('/api/reviews/user/:userName', db.getAllReviewsByUser);

/**
 * @swagger
 * /api/reviews/platform/{platformName}/user/{userName}:
 *   get:
 *     tags:
 *       - Review
 *     description: Return all Reviews by specific platform and user
 *     produces:
 *       - application/json
 *     parameters:
*       - name: platformName
*         description: platform's name
*         in: path
*         required: true
*         type: string
*       - name: userName
*         description: user's name
*         in: path
*         required: true
*         type: string
 *     responses:
 *       200:
 *         description: An array of reviews by specific platform
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.get('/api/reviews/platform/:platformName/user/:userName', db.getAllReviewsByPlatformByUser);

/**
 * @swagger
 * /api/reviews/platform/{platformName}/user/{userName}:
 *   post:
 *     tags:
 *       - Review
 *     description: Create a new Review for a specific User & specific platform
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *       - name: platformName
 *         description: Platform object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Platform'
 *     responses:
 *       200:
 *         description: Successfully created a Review
 */
router.post('/api/reviews/platform/:platformName/user/:userName', db.createReviewByPlatformByUser);

module.exports = router;
