const db = require('./conn');

class MountainModel {
  constructor(id, name, distance, location) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.location = location;
  }

  static async getAllMountains() {
    try {
      
      const response = await db.any(`SELECT * FROM mountain;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(m_id) {
    try {
      const response = await db.any(`SELECT * FROM mountain WHERE id = $1`, m_id);
      console.log(response);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getMountainByReview(m_id) {
    try {
      const reviewID = await this.getSingleReview(m_id);
      const response = await db.any(`SELECT * FROM mountain WHERE id = $1`, reviewID[0].mountain_id);
      console.log(response[0].name);
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

  static async getMountainPic(m_id) {
    try {
      const response = await db.one(`SELECT image FROM mountain WHERE id = $1`, m_id);
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

  static async getSingleReview(m_id) {
    try {
      const response = await db.any(`SELECT * FROM review WHERE id = $1`, m_id);
      console.log(response);
      return response;
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  // static async getKarma(m_id) {
  //   try {
  //     const reviewID = await this.getReviewDetails(m_id);
  //     console.log(reviewID[0].id);
  //     const response = await db.any(`SELECT re_karma, ro_karma FROM review, route WHERE climber_id = climber.id AND review.id = $1`, [reviewID[0].id]);
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     console.log('ERROR: ', error);
  //   }
  // }


  static async getRoutesById(m_id) {
    console.log("accessed");
    try {
      const response = await db.any(
        `SELECT * FROM route WHERE mountain_id = ${m_id}`
    
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

  static async addReviewKarma(re_karma, m_id) {
    try {
        const response = await db.one(
            `UPDATE review SET re_karma = $1 WHERE id = $2`,
            [re_karma, m_id]
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
