const express = require("express");
const router = express.Router();
const controller = require("../controllers/residentController");

router.post("/create/:id", controller.create);
router.put("/action/:userId", controller.approveOrReject);
router.put("/update/:userId", controller.updateResident);
router.delete("/:userId", controller.deleteResident);
router.get("/:userId", controller.getResidentById);
router.get("/all", controller.getAllResidents);
router.get("/allUsers", controller.getAllUsers);

module.exports = router;
