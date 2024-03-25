const config = require("../config")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    dialect: "mysql",
    host: config.db.host,
    // bütün tablolar için ekleme ve güncelleme tarihini false yapıyoruz
    define: {
        timestamps: false
    },
    storage: "./session.mysql",
})

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Baglanti oluşturuldu");
    } catch (error) {
        console.log(error);
    }
}

connect()

module.exports = sequelize;