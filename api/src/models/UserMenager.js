const AbstractManager = require("./AbstractMenager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {

    const result = await this.database.query(`insert into "${this.table}" (firstname, surname, age, role_id) values ($1, $2, $3, $4) RETURNING id;`,
        [user.firstname, user.surname, user.age, user.role_id] );
    return result.rows[0].id;
  }

  async read(id) {
    const {rows} = await this.database.query( `select * from "${this.table}" where id = $1;`, [id] );
    return rows[0];
  }

  async readAll() {
    const {rows} = await this.database.query(`select "${this.table}".id, firstname, surname, age, role_name from "${this.table}" JOIN role ON "${this.table}".role_id = role.id;`);
    return rows;
  }

  async delete(id) {
    const rows = await this.database.query( `delete from "${this.table}" where id = $1;`, [id] );
    return rows;
  }

  // TODO: 
  // async update(user) {
  //   ...
  // }

}

module.exports = UserManager;