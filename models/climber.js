const db = require('./conn');
bcrypt = require('bcryptjs')


class Climber {
  constructor(id, first_name, last_name, email, password) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }

  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

  async addUser() {
    try {
      const response = await db.one(
        `INSERT INTO climber (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`,
        [this.first_name, this.last_name, this.email, this.password]
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  async loginUser() {
    try {
      const response = await db.one(
        `SELECT id, first_name, last_name, password FROM users WHERE email = $1;`,
        [this.email]
      );
      const isValid = this.checkPassword(response.password);
      if (!!isValid) {
        console.log('SUCCESS!!!!', isValid);
      } else {
        console.log('GO AWAY!!!!!', isValid);
      }
      return isValid;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = Climber;