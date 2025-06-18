const express = require('express');
const router = express.Router();

const {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');

const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       required:
 *         - title
 *         - department
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
*/

/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Create a new skill
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       201:
 *         description: Skill created
 *       401:
 *         description: Unauthorized
 */
router.post('/', authMiddleware, createSkill);

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Get all skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: A list of all skills
 */
router.get('/', getAllSkills);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Update a skill by ID
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The skill ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       200:
 *         description: Skill updated
 *       404:
 *         description: Skill not found
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', authMiddleware, updateSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Delete a skill by ID
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The skill ID
 *     responses:
 *       200:
 *         description: Skill deleted
 *       404:
 *         description: Skill not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', authMiddleware, deleteSkill);

module.exports = router;
