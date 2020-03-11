const db = require('./conn');
bcrypt = require('bcryptjs')


<<<<<<< HEAD
class Climber {
  constructor(id, first_name, last_name, email, password) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }
=======
class ClimberModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
>>>>>>> feb6589b9502800a22b87b0926f1b700aa48c789

  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

<<<<<<< HEAD
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
=======
    async addClimber() {
        console.log('adding climbers', this.name);
        try {
            const response = await db.one(
                `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id`,
                [this.name, this.email, this.password]
            );
            return response;
        } catch(error) {
        console.error("ERROR: ", error);
        return error;
    }
}

    async loginClimber() {
        console.log('logging in climber');
        try {
            const response = await db.one(
                `SELECT id, name, password FROM user WHERE email = $1;`, 
                [this.email]
            );

            const isValid = this.checkPassword(response.password);

            if (!!isValid) {

                const { id, name } = response;
                return { isValid, climber_id: id, name };

            } else {
                return { isValid };
            }
        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
>>>>>>> feb6589b9502800a22b87b0926f1b700aa48c789
    }
  }
}

module.exports = ClimberModel;