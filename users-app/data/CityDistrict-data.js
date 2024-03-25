const City = require("../models/City")
const District = require("../models/District")
const CityDistrict = require("../models/CityDistrict")

// City.belongsToMany(District, { through: CityDistrict });
// District.belongsTo(City, { through: CityDistrict });


async function cityDistrictData() {  
    const cities = await City.bulkCreate([
        { id: 1, name: 'ADANA' },
        { id: 2, name: 'ADIYAMAN' },
        { id: 3, name: 'AFYONKARAHİSAR' },
        { id: 4, name: 'AĞRI' },
        { id: 5, name: 'AMASYA' },
        { id: 6, name: 'ANKARA' },
        { id: 7, name: 'ANTALYA' },
        { id: 8, name: 'ARTVİN' },
        { id: 9, name: 'AYDIN' },
        { id: 10, name: 'BALIKESİR' },
        { id: 11, name: 'BİLECİK' },
        { id: 12, name: 'BİNGÖL' },
        { id: 13, name: 'BİTLİS' },
        { id: 14, name: 'BOLU' },
        { id: 15, name: 'BURDUR' },
        { id: 16, name: 'BURSA' },
        { id: 17, name: 'ÇANAKKALE' },
        { id: 18, name: 'ÇANKIRI' },
        { id: 19, name: 'ÇORUM' },
        { id: 20, name: 'DENİZLİ' },
        { id: 21, name: 'DİYARBAKIR' },
        { id: 22, name: 'EDİRNE' },
        { id: 23, name: 'ELAZIĞ' },
        { id: 24, name: 'ERZİNCAN' },
        { id: 25, name: 'ERZURUM' },
        { id: 26, name: 'ESKİŞEHİR' },
        { id: 27, name: 'GAZİANTEP' },
        { id: 28, name: 'GİRESUN' },
        { id: 29, name: 'GÜMÜŞHANE' },
        { id: 30, name: 'HAKKARİ' },
        { id: 31, name: 'HATAY' },
        { id: 32, name: 'ISPARTA' },
        { id: 33, name: 'MERSİN' },
        { id: 34, name: 'İSTANBUL' },
        { id: 35, name: 'İZMİR' },
        { id: 36, name: 'KARS' },
        { id: 37, name: 'KASTAMONU' },
        { id: 38, name: 'KAYSERİ' },
        { id: 39, name: 'KIRKLARELİ' },
        { id: 40, name: 'KIRŞEHİR' },
        { id: 41, name: 'KOCAELİ' },
        { id: 42, name: 'KONYA' },
        { id: 43, name: 'KÜTAHYA' },
        { id: 44, name: 'MALATYA' },
        { id: 45, name: 'MANİSA' },
        { id: 46, name: 'KAHRAMANMARAŞ' },
        { id: 47, name: 'MARDİN' },
        { id: 48, name: 'MUĞLA' },
        { id: 49, name: 'MUŞ' },
        { id: 50, name: 'NEVŞEHİR' },
        { id: 51, name: 'NİĞDE' },
        { id: 52, name: 'ORDU' },
        { id: 53, name: 'RİZE' },
        { id: 54, name: 'SAKARYA' },
        { id: 55, name: 'SAMSUN' },
        { id: 56, name: 'SİİRT' },
        { id: 57, name: 'SİNOP' },
        { id: 58, name: 'SİVAS' },
        { id: 59, name: 'TEKİRDAĞ' },
        { id: 60, name: 'TOKAT' },
        { id: 61, name: 'TRABZON' },
        { id: 62, name: 'TUNCELİ' },
        { id: 63, name: 'ŞANLIURFA' },
        { id: 64, name: 'UŞAK' },
        { id: 65, name: 'VAN' },
        { id: 66, name: 'YOZGAT' },
        { id: 67, name: 'ZONGULDAK' },
        { id: 68, name: 'AKSARAY' },
        { id: 69, name: 'BAYBURT' },
        { id: 70, name: 'KARAMAN' },
        { id: 71, name: 'KIRIKKALE' },
        { id: 72, name: 'BATMAN' },
        { id: 73, name: 'ŞIRNAK' },
        { id: 74, name: 'BARTIN' },
        { id: 75, name: 'ARDAHAN' },
        { id: 76, name: 'IĞDIR' },
        { id: 77, name: 'YALOVA' },
        { id: 78, name: 'KARABÜK' },
        { id: 79, name: 'KİLİS' },
        { id: 80, name: 'OSMANİYE' },
        { id: 81, name: 'DÜZCE' },
    ]);

    const districts = await District.bulkCreate([
        // Adana ilçeleri
        { name: 'Seyhan', CityId: 1 },
        { name: 'Yüreğir', CityId: 1 },
        { name: 'Sarıçam', CityId: 1 },
    
        // Adıyaman ilçeleri
        { name: 'Merkez', CityId: 2 },
        { name: 'Kahta', CityId: 2 },
        { name: 'Samsat', CityId: 2 },
    
        // Afyonkarahisar ilçeleri
        { name: 'Merkez', CityId: 3 },
        { name: 'Sandıklı', CityId: 3 },
        { name: 'Bolvadin', CityId: 3 },
    
        // Ağrı ilçeleri
        { name: 'Merkez', CityId: 4 },
        { name: 'Diyadin', CityId: 4 },
        { name: 'Patnos', CityId: 4 },
    
        // Amasya ilçeleri
        { name: 'Merkez', CityId: 5 },
        { name: 'Taşova', CityId: 5 },
        { name: 'Suluova', CityId: 5 },
    
        // Ankara ilçeleri
        { name: 'Çankaya', CityId: 6 },
        { name: 'Keçiören', CityId: 6 },
        { name: 'Yenimahalle', CityId: 6 },
    
        // Antalya ilçeleri
        { name: 'Muratpaşa', CityId: 7 },
        { name: 'Kepez', CityId: 7 },
        { name: 'Manavgat', CityId: 7 },
    
        // Artvin ilçeleri
        { name: 'Merkez', CityId: 8 },
        { name: 'Hopa', CityId: 8 },
        { name: 'Borçka', CityId: 8 },
    
        // Aydın ilçeleri
        { name: 'Merkez', CityId: 9 },
        { name: 'Nazilli', CityId: 9 },
        { name: 'Söke', CityId: 9 },
    
         // Balıkesir ilçeleri
         { name: 'Merkez', CityId: 10 },
         { name: 'Bandırma', CityId: 10 },
         { name: 'Bigadiç', CityId: 10 },
     
         // Bilecik ilçeleri
         { name: 'Merkez', CityId: 11 },
         { name: 'Bozüyük', CityId: 11 },
         { name: 'Gölpazarı', CityId: 11 },
     
         // Bingöl ilçeleri
         { name: 'Merkez', CityId: 12 },
         { name: 'Karlıova', CityId: 12 },
         { name: 'Yayladere', CityId: 12 },
     
         // Bitlis ilçeleri
         { name: 'Merkez', CityId: 13 },
         { name: 'Adilcevaz', CityId: 13 },
         { name: 'Hizan', CityId: 13 },
     
         // Bolu ilçeleri
         { name: 'Merkez', CityId: 14 },
         { name: 'Gerede', CityId: 14 },
         { name: 'Mengen', CityId: 14 },
     
         // Burdur ilçeleri
         { name: 'Merkez', CityId: 15 },
         { name: 'Ağlasun', CityId: 15 },
         { name: 'Altınyayla', CityId: 15 },
     
         // Bursa ilçeleri
         { name: 'Osmangazi', CityId: 16 },
         { name: 'Nilüfer', CityId: 16 },
         { name: 'Yıldırım', CityId: 16 },
     
         // Çanakkale ilçeleri
         { name: 'Merkez', CityId: 17 },
         { name: 'Biga', CityId: 17 },
         { name: 'Gelibolu', CityId: 17 },
     
         // Çankırı ilçeleri
         { name: 'Merkez', CityId: 18 },
         { name: 'Atkaracalar', CityId: 18 },
         { name: 'Bayramören', CityId: 18 },
     
         // Çorum ilçeleri
         { name: 'Merkez', CityId: 19 },
         { name: 'Alaca', CityId: 19 },
         { name: 'Bayat', CityId: 19 },
     
         // Denizli ilçeleri
         { name: 'Merkez', CityId: 20 },
         { name: 'Acıpayam', CityId: 20 },
         { name: 'Babadağ', CityId: 20 },
     
         // Diyarbakır ilçeleri
         { name: 'Bağlar', CityId: 21 },
         { name: 'Kayapınar', CityId: 21 },
         { name: 'Yenişehir', CityId: 21 },
     
         // Edirne ilçeleri
         { name: 'Merkez', CityId: 22 },
         { name: 'Keşan', CityId: 22 },
         { name: 'Uzunköprü', CityId: 22 },
     
         // Elazığ ilçeleri
         { name: 'Merkez', CityId: 23 },
         { name: 'Ağın', CityId: 23 },
         { name: 'Arıcak', CityId: 23 },
     
         // Erzincan ilçeleri
         { name: 'Merkez', CityId: 24 },
         { name: 'Çayırlı', CityId: 24 },
         { name: 'İliç', CityId: 24 },
     
         // Erzurum ilçeleri
         { name: 'Yakutiye', CityId: 25 },
         { name: 'Palandöken', CityId: 25 },
         { name: 'Aziziye', CityId: 25 },
     
         // Eskisehir ilçeleri
         { name: 'Merkez', CityId: 26 },
         { name: 'Seyitgazi', CityId: 26 },
         { name: 'Sivrihisar', CityId: 26 },
     
         // Gaziantep ilçeleri
         { name: 'Şehitkamil', CityId: 27 },
         { name: 'Şahinbey', CityId: 27 },
         { name: 'Oğuzeli', CityId: 27 },
     
         // Giresun ilçeleri
         { name: 'Merkez', CityId: 28 },
         { name: 'Alucra', CityId: 28 },
         { name: 'Bulancak', CityId: 28 },
     
         // Gümüşhane ilçeleri
         { name: 'Merkez', CityId: 29 },
         { name: 'Köse', CityId: 29 },
         { name: 'Şiran', CityId: 29 },
     
         // Hakkari ilçeleri
         { name: 'Merkez', CityId: 30 },
         { name: 'Çukurca', CityId: 30 },
         { name: 'Şemdinli', CityId: 30 },
     
         // Hatay ilçeleri
         { name: 'Antakya', CityId: 31 },
         { name: 'Dörtyol', CityId: 31 },
         { name: 'Defne', CityId: 31 },
     
         // Isparta ilçeleri
         { name: 'Merkez', CityId: 32 },
         { name: 'Aksu', CityId: 32 },
         { name: 'Atabey', CityId: 32 },
     
         // Mersin ilçeleri
         { name: 'Yenişehir', CityId: 33 },
         { name: 'Toroslar', CityId: 33 },
         { name: 'Akvaryum', CityId: 33 },
     
         // Istanbul ilçeleri
         { name: 'Kadıköy', CityId: 34 },
         { name: 'Üsküdar', CityId: 34 },
         { name: 'Fatih', CityId: 34 },
     
         // Izmir ilçeleri
         { name: 'Konak', CityId: 35 },
         { name: 'Bornova', CityId: 35 },
         { name: 'Buca', CityId: 35 },
     
         // Kars ilçeleri
         { name: 'Merkez', CityId: 36 },
         { name: 'Kağızman', CityId: 36 },
         { name: 'Akyaka', CityId: 36 },
     
         // Kastamonu ilçeleri
         { name: 'Merkez', CityId: 37 },
         { name: 'Cide', CityId: 37 },
         { name: 'Araç', CityId: 37 },
     
         // Kayseri ilçeleri
         { name: 'Melikgazi', CityId: 38 },
         { name: 'Kocasinan', CityId: 38 },
         { name: 'Talas', CityId: 38 },
     
         // Kirklareli ilçeleri
         { name: 'Merkez', CityId: 39 },
         { name: 'Lüleburgaz', CityId: 39 },
         { name: 'Babaeski', CityId: 39 },
     
         // Kirsehir ilçeleri
         { name: 'Merkez', CityId: 40 },
         { name: 'Çiçekdağı', CityId: 40 },
         { name: 'Kaman', CityId: 40 },
     
         // Kocaeli ilçeleri
         { name: 'İzmit', CityId: 41 },
         { name: 'Gebze', CityId: 41 },
         { name: 'Körfez', CityId: 41 },
     
         // Konya ilçeleri
         { name: 'Meram', CityId: 42 },
         { name: 'Selçuklu', CityId: 42 },
         { name: 'Karatay', CityId: 42 },
     
         // Kütahya ilçeleri
         { name: 'Merkez', CityId: 43 },
         { name: 'Tavşanlı', CityId: 43 },
         { name: 'Domaniç', CityId: 43 },
     
         // Malatya ilçeleri
         { name: 'Battalgazi', CityId: 44 },
         { name: 'Yeşilyurt', CityId: 44 },
         { name: 'Darende', CityId: 44 },
     
         // Manisa ilçeleri
         { name: 'Merkez', CityId: 45 },
         { name: 'Turgutlu', CityId: 45 },
         { name: 'Salihli', CityId: 45 },
     
         // Kahramanmaras ilçeleri
         { name: 'Dulkadiroğlu', CityId: 46 },
         { name: 'Onikişubat', CityId: 46 },
         { name: 'Afşin', CityId: 46 },
     
         // Mardin ilçeleri
         { name: 'Artuklu', CityId: 47 },
         { name: 'Kızıltepe', CityId: 47 },
         { name: 'Midyat', CityId: 47 },
     
         // Mugla ilçeleri
         { name: 'Bodrum', CityId: 48 },
         { name: 'Marmaris', CityId: 48 },
         { name: 'Fethiye', CityId: 48 },
     
         // Mus ilçeleri
         { name: 'Merkez', CityId: 49 },
         { name: 'Varto', CityId: 49 },
         { name: 'Malazgirt', CityId: 49 },
     
         // Nevsehir ilçeleri
         { name: 'Merkez', CityId: 50 },
         { name: 'Ürgüp', CityId: 50 },
         { name: 'Avanos', CityId: 50 },
     
         // Nigde ilçeleri
         { name: 'Merkez', CityId: 51 },
         { name: 'Bor', CityId: 51 },
         { name: 'Çamardı', CityId: 51 },
     
         // Ordu ilçeleri
         { name: 'Altınordu', CityId: 52 },
         { name: 'Fatsa', CityId: 52 },
         { name: 'Ünye', CityId: 52 },
     
         // Rize ilçeleri
         { name: 'Merkez', CityId: 53 },
         { name: 'Çayeli', CityId: 53 },
         { name: 'Ardeşen', CityId: 53 },
     
         // Sakarya ilçeleri
         { name: 'Serdivan', CityId: 54 },
         { name: 'Erenler', CityId: 54 },
         { name: 'Hendek', CityId: 54 },
     
         // Samsun ilçeleri
         { name: 'İlkadım', CityId: 55 },
         { name: 'Atakum', CityId: 55 },
         { name: 'Canik', CityId: 55 },
     
         // Siirt ilçeleri
         { name: 'Merkez', CityId: 56 },
         { name: 'Pervari', CityId: 56 },
         { name: 'Kurtalan', CityId: 56 },
     
         // Sinop ilçeleri
         { name: 'Merkez', CityId: 57 },
         { name: 'Boyabat', CityId: 57 },
         { name: 'Durağan', CityId: 57 },
     
         // Sivas ilçeleri
         { name: 'Merkez', CityId: 58 },
         { name: 'Divriği', CityId: 58 },
         { name: 'Kangal', CityId: 58 },
     
         // Tekirdag ilçeleri
         { name: 'Merkez', CityId: 59 },
         { name: 'Çorlu', CityId: 59 },
         { name: 'Ergene', CityId: 59 },
     
         // Tokat ilçeleri
         { name: 'Merkez', CityId: 60 },
         { name: 'Niksar', CityId: 60 },
         { name: 'Reşadiye', CityId: 60 },
     
         // Trabzon ilçeleri
         { name: 'Ortahisar', CityId: 61 },
         { name: 'Akçaabat', CityId: 61 },
         { name: 'Araklı', CityId: 61 },
     
         // Tunceli ilçeleri
         { name: 'Merkez', CityId: 62 },
         { name: 'Çemişgezek', CityId: 62 },
         { name: 'Pertek', CityId: 62 },
     
         // Şanlıurfa ilçeleri
         { name: 'Haliliye', CityId: 63 },
         { name: 'Eyyübiye', CityId: 63 },
         { name: 'Akçakale', CityId: 63 },
     
         // Usak ilçeleri
         { name: 'Merkez', CityId: 64 },
         { name: 'Banaz', CityId: 64 },
         { name: 'Eşme', CityId: 64 },
     
         // Van ilçeleri
         { name: 'Merkez', CityId: 65 },
         { name: 'Edremit', CityId: 65 },
         { name: 'Erciş', CityId: 65 },
     
         // Yozgat ilçeleri
         { name: 'Merkez', CityId: 66 },
         { name: 'Sorgun', CityId: 66 },
         { name: 'Akdağmadeni', CityId: 66 },
    
             // Zonguldak ilçeleri
        { name: 'Merkez', CityId: 67 },
        { name: 'Çaycuma', CityId: 67 },
        { name: 'Devrek', CityId: 67 },
    
        // Aksaray ilçeleri
        { name: 'Merkez', CityId: 68 },
        { name: 'Ağaçören', CityId: 68 },
        { name: 'Güzelyurt', CityId: 68 },
    
        // Bayburt ilçeleri
        { name: 'Merkez', CityId: 69 },
        { name: 'Aydıntepe', CityId: 69 },
        { name: 'Demirözü', CityId: 69 },
    
        // Karaman ilçeleri
        { name: 'Merkez', CityId: 70 },
        { name: 'Ermenek', CityId: 70 },
        { name: 'Kazımkarabekir', CityId: 70 },
    
        // Kırıkkale ilçeleri
        { name: 'Merkez', CityId: 71 },
        { name: 'Delice', CityId: 71 },
        { name: 'Keskin', CityId: 71 },
    
        // Batman ilçeleri
        { name: 'Merkez', CityId: 72 },
        { name: 'Beşiri', CityId: 72 },
        { name: 'Kozluk', CityId: 72 },
    
        // Şırnak ilçeleri
        { name: 'Merkez', CityId: 73 },
        { name: 'Silopi', CityId: 73 },
        { name: 'İdil', CityId: 73 },
    
        // Bartın ilçeleri
        { name: 'Merkez', CityId: 74 },
        { name: 'Amasra', CityId: 74 },
        { name: 'Ulus', CityId: 74 },
    
        // Ardahan ilçeleri
        { name: 'Merkez', CityId: 75 },
        { name: 'Çıldır', CityId: 75 },
        { name: 'Hanak', CityId: 75 },
    
        // Iğdır ilçeleri
        { name: 'Merkez', CityId: 76 },
        { name: 'Aralık', CityId: 76 },
        { name: 'Tuzluca', CityId: 76 },
    
        // Yalova ilçeleri
        { name: 'Merkez', CityId: 77 },
        { name: 'Çiftlikköy', CityId: 77 },
        { name: 'Armutlu', CityId: 77 },
    
        // Karabük ilçeleri
        { name: 'Merkez', CityId: 78 },
        { name: 'Eflani', CityId: 78 },
        { name: 'Safranbolu', CityId: 78 },
    
        // Kilis ilçeleri
        { name: 'Merkez', CityId: 79 },
        { name: 'Elbeyli', CityId: 79 },
        { name: 'Musabeyli', CityId: 79 },
    
        // Osmaniye ilçeleri
        { name: 'Merkez', CityId: 80 },
        { name: 'Kadirli', CityId: 80 },
        { name: 'Düziçi', CityId: 80 },
    
        // Düzce ilçeleri
        { name: 'Merkez', CityId: 81 },
        { name: 'Akçakoca', CityId: 81 },
        { name: 'Yığılca', CityId: 81 },
    
    ]);

    // for (const city of cities) {
    //     const cityId = city.id;
    //     const cityDistricts = districts.filter(district => district.CityId === cityId);
    //     await city.addDistrict(cityDistricts);
    // }

}
module.exports = cityDistrictData