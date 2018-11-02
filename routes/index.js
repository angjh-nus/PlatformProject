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
 *       - APIs
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
 * /api/users:
 *   get:
 *     tags:
 *       - APIs
 *     description: Return all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/api/platforms', db.getAllUsers);



module.exports = router;
