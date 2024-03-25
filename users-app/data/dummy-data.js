const User = require("../models/User")
const City = require("../models/City")
const District = require("../models/District")
const sequelize = require("./db")
const cityDistrictData = require("./CityDistrict-data")

// District.hasOne(User);
// City.hasOne(User);



async function createUsers() {
    await sequelize.sync({ force: true });

    cityDistrictData()
}

module.exports = createUsers