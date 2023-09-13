const tables = require("../tables");

const browse = async (req, res, next) => {
    try {
        const users = await tables.user.readAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

const read = async (req, res, next) => {
    try {
        const user = await tables.user.read(req.params.id);
        if (user == null) {
            res.sendStatus(404);
        } else {
            res.json(user);
        }
    } catch (err) {
        next(err);
    }
};

const add = async (req, res, next) => {
    const user = req.body;
    const { firstname, surname, age, role_name } = user;
    if (firstname == '' &&
        surname == '' &&
        age == '' &&
        (role_name != 1 || role_name != 2 || role_name != 3)
    ) {
        res.status(400).json({ message: "Data is missing" });
    } else {
        try {
            const insertId = await tables.user.create(user);
            res.status(201).json({ insertId: insertId });
        } catch (err) {
            next(err);
        }
    }
};

const destroy = async (req, res, next) => {
    try {
        const user = await tables.user.delete(req.params.id);
        if (user == null) {
            res.sendStatus(400);
        } else {
            res.sendStatus(200);
        }
    } catch (err) {
        next(err);
    }
};

// TODO: Destroy (Delete)
// TODO:  Edit (Update) operation

module.exports = {
    browse,
    read,
    // edit,
    add,
    destroy,
};