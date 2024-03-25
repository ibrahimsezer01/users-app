const express = require("express");
const router = express.Router();
const typeJSON = require("../controllers/typeJSON")


// İlçeler JSON
// İlçeleri ID'ye göre getirme
router.get("/district/:id", typeJSON.get_json_district_ById);
// Tüm İlçeleri getirme
router.get("/districts", typeJSON.get_json_districts);


// Cities JSON
// Şehiri ID'ye göre getirme
router.get("/city/:id", typeJSON.get_json_city_ById);
// Tüm Şehirleri getirme
router.get("/cities", typeJSON.get_json_cities);


// AllData JSON
// Tüm kullanıcıları getirme
router.get("/allData", typeJSON.get_json_allData);


// Users JSON
// Kullanıcıyı ID'ye göre getirme
router.get("/:id", typeJSON.get_json_user_ById);
// Tüm kullanıcıları getirme
router.get("/", typeJSON.get_json_users);



module.exports = router