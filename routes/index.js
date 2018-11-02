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
router.get('/api/users', db.createUser);



module.exports = router;
