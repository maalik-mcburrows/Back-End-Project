const db = require('./conn');

class WaypointModel {
  constructor(id, name, distance, location, image) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.location = location;
    this.image = image;
  }

 
  static async addWaypoint(mountain_id, climber_id, name, image) {
    try {
        const response = await db.one(
            `INSERT INTO route (mountain_id, climber_id, name, image) VALUES ($1,$2,$3,$4) RETURNING id`, 
            [mountain_id, climber_id, name, image]
        );
        return response;
    }
    catch (error) {
        console.error('ERROR', error);
        return error;
    }
}

  
};

  

module.exports = WaypointModel;