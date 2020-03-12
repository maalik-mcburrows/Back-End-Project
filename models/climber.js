const db = require('./conn');
bcrypt = require('bcryptjs');

class ClimberModel {
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

    async addClimber() {
        console.log('adding climbers', this);
        try {
            const response = await db.one(
                `INSERT INTO climber (first_name, email, password, last_name) VALUES ($1, $2, $3, $4) RETURNING id`,
                [this.first_name, this.email, this.password, this.last_name]
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
                `SELECT id, first_name, last_name, password FROM climber WHERE email = $1;`, 
                [this.email]
            );

            const isValid = this.checkPassword(response.password);

            if (!!isValid) {

                const { id, first_name, last_name } = response;
                console.log('Success');
                return { isValid, climber_id: id, first_name, last_name };

            } else {
                return { isValid },
                console.log('GO AWAY');
            }
        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = ClimberModel;