const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const roles = await tables.role.readAll();
    res.json(roles);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const role = await tables.role.read(req.params.id);
    if (role == null) {
      res.sendStatus(404);
    } else {
      res.json(role);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const role = req.body;
  try {
    const insertId = await tables.role.create(role);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// TODO:  Edit (Update) operation
// TODO: Destroy (Delete)

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};