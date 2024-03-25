const User = require("../models/User");
const City = require("../models/City")
const District = require("../models/District")

// Districts JSON
exports.get_json_district_ById = async (req, res) => {
    const districtId = req.params.id;

    try {
        const district = await District.findByPk(districtId);
        if (district) {
            res.status(200).json(district);
        } else {
            res.status(404).json({ error: "District not found" });
        }
    } catch (error) {
        console.log(error);
    }
}

exports.get_json_districts = async (req, res) => {
    try {
        const districts = await District.findAll();
        if (districts) {
            res.status(200).json(districts);
        } else {
            res.status(404).json({ error: "Districts not found" });
        }
    } catch (error) {
        console.log(error);
    }
}


// Cities JSON
exports.get_json_city_ById = async (req, res) => {
    const cityId = req.params.id;

    try {
        const city = await City.findByPk(cityId);
        if (city) {
            res.status(200).json(city);
        } else {
            res.status(404).json({ error: "City not found" });
        }
    } catch (error) {
        console.log(error);
    }
}

exports.get_json_cities = async (req, res) => {
    try {
        const cities = await City.findAll();
        if (cities) {
            res.status(200).json(cities);
        } else {
            res.status(404).json({ error: "Cities not found" });
        }
    } catch (error) {
        console.log(error);
    }
}


// Users JSON
exports.get_json_user_ById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.log(error);
    }
}

exports.get_json_users = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}


// All Data JSON
exports.get_json_allData = async (req, res) => {
    try {
        const users = await User.findAll();
        const cities = await City.findAll();
        const district = await District.findAll();
        res.status(200).json({ users: users, cities: cities, district: district });
    } catch (error) {
        console.log(error);
    }
}