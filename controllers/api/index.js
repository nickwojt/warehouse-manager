const router = require("express").Router();

const userRoutes = require("./user-routes");

const bagelRoutes = require("./bagel");

router.use("/users", userRoutes);
router.use("/bagel", bagelRoutes);

module.exports = router;
