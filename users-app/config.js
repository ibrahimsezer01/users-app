const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
}

module.exports = config