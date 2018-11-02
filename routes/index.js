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
 */

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *       - Platforms
 *     description: Returns all Online Platforms
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of online platforms
 *         schema:
 *           $ref: '#/definitions/Platform'
 */
router.get('/api/platforms', db.getAllPlatforms);



module.exports = router;
