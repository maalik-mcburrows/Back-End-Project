const db = require('./conn');
bcrypt = require('bcryptjs');

class Climber {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    } 

    async addUser() {
        console.log('adding user', this.name);
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

    async loginUser() {
        console.log('logging in user');
        try {
            const response = await db.one(
                `SELECT id, name, password FROM user WHERE email = $1;`, 
                [this.email]
            );

            const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, name } = response;
                return { isValid, id, name };
            } else {
                return {isValid};
            }
        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = Climber;