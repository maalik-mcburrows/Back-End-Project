const db = require('./conn');

class  mountain {
  constructor(id, name, distance, location) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.location = location;
  }

  static async getAll() {
    try {
      
      const response = await db.any(`select * from mountain;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(m_id) {
    try {
      const response = await db.one(`select * from mountain where id = ${m_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getRoutesById(r_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `select * from route where mountain_id = ${m_id}`
    
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = mountain;
