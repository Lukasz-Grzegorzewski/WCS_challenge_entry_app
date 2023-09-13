const AbstractManager = require("./AbstractMenager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const {result} = await this.database.query( `insert into "${this.table}" (id, role_name) values ($1, $2)`, [role.id, role.role_name] );
    return result.insertId;
  }

  async read(id) {
    const {rows} = await this.database.query( `select * from "${this.table}" where id = $1`, [id] );
    return rows[0];
  }

  async readAll() {
    const {rows} = await this.database.query(`select * from "${this.table}"`);
    return rows;
  }

  // TODO: 
  // async update(user) {
  //   ...
  // }

  // TODO: 
  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;