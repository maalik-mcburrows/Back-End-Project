const db = require('./conn');

class MountainModel {
  constructor(id, name, distance, location, image) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.location = location;
    this.image = image;
  }

  static async getAllMountains() {
    try {
      
      const response = await db.any(`SELECT * FROM mountain;`);
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getMountainById(m_id) {
    try {
      const response = await db.any(`SELECT * FROM mountain WHERE id = $1`, m_id);
      console.log(response);
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getMountainName(m_id) {
    try {
      const response = await db.one(`SELECT name FROM mountain WHERE id = $1`, m_id);
      console.log(response);
      return response;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static async getReviewDetails(m_id) {
    try {
      const response = await db.any(`SELECT * FROM review WHERE mountain_id = $1`, m_id);
      console.log(response);
      return response;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static async getRoutesById(m_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `SELECT * FROM route WHERE mountain_id = ${m_id}`
      )
      return response;

    } catch (err) {
      return err.message;
    }
  }

  static async getReviewsById(m_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `SELECT * FROM review WHERE mountain_id = ${m_id}`
    
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addReviews(review_title, review_text, reviewer_name, mountain_id, climber_id) {
    try {
        const response = await db.one(
            `INSERT INTO review (review_title, review_text, reviewer_name, mountain_id, climber_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING id`,
            [review_title, review_text, reviewer_name, mountain_id, climber_id]
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error('ERROR', error);
        return error;
    }
  }
};

  



module.exports = MountainModel;
