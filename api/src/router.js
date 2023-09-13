const express = require("express");

const router = express.Router();

//USERS routes
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

//ROLES routes
const roleControllers = require("./controllers/roleControllers");

router.get("/roles", roleControllers.browse);
// router.get("/roles/:id", roleControllers.read);
// router.post("/roles", roleControllers.add);

/* ************************************************************************* */

module.exports = router;