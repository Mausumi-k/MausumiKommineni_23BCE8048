// controllers/skillController.js

const Skill = require('../models/Skill');

// Create skill
exports.createSkill = async (req, res) => {
  try {
    const newSkill = new Skill({
      ...req.body,
      user: req.user._id  // Attach the logged-in user ID
    });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate('user', 'name email');
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update skill
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.json({ message: 'Skill deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
