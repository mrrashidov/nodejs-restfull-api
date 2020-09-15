const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const AgncyController = require('../controllers/agency');

// Handle incoming GET requests to /orders
router.get("/", checkAuth, AgncyController.getAll);

router.post("/", checkAuth, AgncyController.create);

router.get("/:orderId", checkAuth, AgncyController.show);

router.delete("/:orderId", checkAuth, AgncyController.delete);

module.exports = router;
