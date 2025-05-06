const service = require("../services/residentService");

const create = async (req, res) => {
  try {
    const result = await service.createtuple(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const approveOrReject = async (req, res) => {
  try {
    const result = await service.approveResidentRequest(req.params.userId, req.query.action);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateResident = async (req, res) => {
  try {
    const result = await service.updateResident(req.params.userId, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteResident = async (req, res) => {
  try {
    const result = await service.deleteResident(req.params.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getResidentById = async (req, res) => {
  try {
    const result = await service.getResidentById(req.params.userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllResidents = async (req, res) => {
  const result = await service.getAllResidents();
  res.json(result);
};

const getAllUsers = async (req, res) => {
  const result = await service.getAllUsers();
  res.json(result);
};

module.exports = {
  create,
  approveOrReject,
  updateResident,
  deleteResident,
  getResidentById,
  getAllResidents,
  getAllUsers,
};
