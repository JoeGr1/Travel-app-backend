const fs = require("fs");

const dataIds = [
  {
    id: "64136edbd34a07a723ffe2fb",
  },
  {
    id: "64136edbc6332a45a0e5001a",
  },
  {
    id: "64136edb7cf04e6f5cd7896f",
  },
  {
    id: "64136edb67c60472f3872a9e",
  },
  {
    id: "64136edb93ebeb8b69da2521",
  },
  {
    id: "64136edb95124ba865b68080",
  },
  {
    id: "64136edb1929539f865f1527",
  },
  {
    id: "64136edb2319f8ff20e08994",
  },
  {
    id: "64136edb8e962b6cd79530bb",
  },
  {
    id: "64136edbd36a4f823308c34c",
  },
  {
    id: "64136edbe19810241c4f5fe8",
  },
  {
    id: "64136edbac46d524a52bbcb2",
  },
  {
    id: "64136edb5f64ed895920dd46",
  },
  {
    id: "64136edbfb09c9f4077b5de2",
  },
  {
    id: "64136edbfef2bce03afd5342",
  },
  {
    id: "64136edb08349cd956074988",
  },
  {
    id: "64136edbf48d40191240ddab",
  },
  {
    id: "64136edb02820533b29881e8",
  },
  {
    id: "64136edb1824dc463d9a91db",
  },
  {
    id: "64136edbf63a0038dda8d233",
  },
  {
    id: "64136edb211f68014c10d542",
  },
  {
    id: "64136edb9c0b80d5129d9765",
  },
  {
    id: "64136edba0be759133e4a354",
  },
  {
    id: "64136edb817a0084fb0770e1",
  },
  {
    id: "64136edb55cfdcf03fc45ddf",
  },
  {
    id: "64136edb0380b06494dbfb0a",
  },
  {
    id: "64136edb9ccdb71d5b71fa73",
  },
  {
    id: "64136edb3f5c79b37ae049d5",
  },
  {
    id: "64136edbdf4f81cb81159314",
  },
  {
    id: "64136edb0b99585223a8545a",
  },
  {
    id: "64136edb3d878fc1fc200c24",
  },
  {
    id: "64136edb73b42b5fea6da7c5",
  },
  {
    id: "64136edb4cbb3410b2659b4d",
  },
  {
    id: "64136edbc3e9daa04bc7eacd",
  },
  {
    id: "64136edb853fdb346db09197",
  },
  {
    id: "64136edb664a752a1bd6c3dc",
  },
  {
    id: "64136edb772d9e76cc1e09e0",
  },
  {
    id: "64136edb85b964c28547adee",
  },
  {
    id: "64136edb92308e16c591be60",
  },
  {
    id: "64136edbed748ac639f1d2fc",
  },
  {
    id: "64136edbee95689bc5d14b9d",
  },
  {
    id: "64136edb26654e9a40e32a3e",
  },
  {
    id: "64136edb82bb9bbebc149594",
  },
  {
    id: "64136edbac71b130ea407962",
  },
  {
    id: "64136edb1371c11fe84130d9",
  },
  {
    id: "64136edb627f4a63996b7a1e",
  },
  {
    id: "64136edb644750dc94d150fd",
  },
  {
    id: "64136edbbebf5f19ae9309bb",
  },
  {
    id: "64136edb986c6ddc963193b9",
  },
  {
    id: "64136edb573acfbec32c20f5",
  },
  {
    id: "64136edb21b76b64e7667986",
  },
  {
    id: "64136edb8b7a387b36d683c2",
  },
  {
    id: "64136edb91943e73156a6a66",
  },
  {
    id: "64136edbbff0bd0e9a13cbab",
  },
  {
    id: "64136edb7db000f9af395e73",
  },
  {
    id: "64136edb91c46302a63bcfce",
  },
  {
    id: "64136edb6a43189ceeb9cb5d",
  },
  {
    id: "64136edb5b6e54987408c713",
  },
  {
    id: "64136edb82bac576decc1eaf",
  },
  {
    id: "64136edbe374d1ff0bfee2c2",
  },
  {
    id: "64136edb2f9efc3f3ab7992a",
  },
  {
    id: "64136edbd5d0f16cb49ef50d",
  },
  {
    id: "64136edb354cf226e0b2f4b7",
  },
  {
    id: "64136edb39b52e2adfe2ebe3",
  },
  {
    id: "64136edb301cf1a845ade213",
  },
  {
    id: "64136edb1300c4cadf773101",
  },
  {
    id: "64136edb859cadb9a9aeb726",
  },
  {
    id: "64136edb1640a1264522f936",
  },
  {
    id: "64136edb33e6b452e2844ac3",
  },
  {
    id: "64136edbbf3271a734339f42",
  },
  {
    id: "64136edbd90244381f175e53",
  },
  {
    id: "64136edb75a29fd2b06c771a",
  },
  {
    id: "64136edbdd9bc09b4e6f377c",
  },
  {
    id: "64136edbe6a5b56ea229aae6",
  },
  {
    id: "64136edbd82f90a5de30185e",
  },
  {
    id: "64136edb7659bdf68388deaf",
  },
  {
    id: "64136edbd99c0889f68357b5",
  },
  {
    id: "64136edb5daca39658703674",
  },
  {
    id: "64136edbcf68aeebd13ebe95",
  },
  {
    id: "64136edb7a8673eb64809491",
  },
  {
    id: "64136edbb264883abfef9730",
  },
  {
    id: "64136edb538039e3a7ce2fec",
  },
  {
    id: "64136edb10a99bced03a9a95",
  },
  {
    id: "64136edb46daea340e1c74ea",
  },
  {
    id: "64136edbe62ae4e721035787",
  },
  {
    id: "64136edb953093539c6853f9",
  },
  {
    id: "64136edb0e2c06343e8207d9",
  },
  {
    id: "64136edb51ff30653e797712",
  },
  {
    id: "64136edb71f44669eeaba62e",
  },
  {
    id: "64136edb06351ddbdb144c60",
  },
  {
    id: "64136edb5bbf5a20b63099a0",
  },
  {
    id: "64136edbeaa8543cc5bfa181",
  },
  {
    id: "64136edb57817c63ace18f4f",
  },
  {
    id: "64136edbd46137062d41cf3c",
  },
  {
    id: "64136edb93eddb98962b540a",
  },
  {
    id: "64136edbfb6c4ccdf7c55bb8",
  },
  {
    id: "64136edb42c4b30a5dbb40fd",
  },
  {
    id: "64136edbdd64468aab6e8113",
  },
  {
    id: "64136edb61539aea603e4be0",
  },
  {
    id: "64136edba06ac4f503a7fd9a",
  },
  {
    id: "64136edb2e277377b5e31b5a",
  },
  {
    id: "64136edbb17cc4f6c1395f8a",
  },
  {
    id: "64136edbf9b97daec76af007",
  },
  {
    id: "64136edba7d8c4046a77f9be",
  },
  {
    id: "64136edbb6fff41005fd82c9",
  },
  {
    id: "64136edb34081e75a55a594a",
  },
  {
    id: "64136edb44ddbffeb78b7c9e",
  },
  {
    id: "64136edb05d1e8e00734ddba",
  },
  {
    id: "64136edbc379ce15b27194ba",
  },
  {
    id: "64136edb53de59f621d1d72a",
  },
  {
    id: "64136edbaac9c7e309702be8",
  },
  {
    id: "64136edbc8ef6f079bbddf32",
  },
  {
    id: "64136edbde5b5b97f7035d46",
  },
  {
    id: "64136edb1e5ffe7cd688322d",
  },
  {
    id: "64136edb1872835c328c7dcc",
  },
  {
    id: "64136edbd3070f344df90bae",
  },
  {
    id: "64136edbef71d39ad5e72826",
  },
  {
    id: "64136edbf35c7fca09770cc0",
  },
  {
    id: "64136edbe2ff22503b553326",
  },
  {
    id: "64136edbece7479fd837599d",
  },
  {
    id: "64136edbb4af3a7c133003d3",
  },
  {
    id: "64136edb9785d039eb22d072",
  },
  {
    id: "64136edb786d821c93ac9a23",
  },
  {
    id: "64136edb5c390dcd6f2c169d",
  },
  {
    id: "64136edbf6cfcfaee3f7fd69",
  },
  {
    id: "64136edb168dcf2a867cdc9b",
  },
  {
    id: "64136edb1e6428b7559b221e",
  },
  {
    id: "64136edb86956dd13f3def01",
  },
  {
    id: "64136edb538484fc7ce07642",
  },
  {
    id: "64136edb05b832ad0694323f",
  },
  {
    id: "64136edb2f0e6f551643cd08",
  },
  {
    id: "64136edb1edb3be51c891243",
  },
  {
    id: "64136edb46768e5067db244d",
  },
  {
    id: "64136edb54724e3317353baa",
  },
  {
    id: "64136edb8700cfcd08af944d",
  },
  {
    id: "64136edb558282c4308b3cae",
  },
  {
    id: "64136edba2ef4896ded2b395",
  },
  {
    id: "64136edba055afe0062cc31e",
  },
  {
    id: "64136edb97387c98c505b347",
  },
  {
    id: "64136edbcb9c7753f93ac0d1",
  },
  {
    id: "64136edb89a25dbb78773be7",
  },
  {
    id: "64136edb41f404cbacbb4c91",
  },
  {
    id: "64136edb8e302624d89d4c05",
  },
  {
    id: "64136edb9273209d23eafdb9",
  },
  {
    id: "64136edbedd87cc7916ac4b6",
  },
  {
    id: "64136edbfa261a8cfbaf1c71",
  },
  {
    id: "64136edb6e56ae364f2beea9",
  },
  {
    id: "64136edbaf2da3508271c698",
  },
  {
    id: "64136edb3feef29c66c47061",
  },
  {
    id: "64136edbcef1ee64a1bd3e07",
  },
  {
    id: "64136edbdf1d9890d84c9ee4",
  },
  {
    id: "64136edb1f0a71dfaf720856",
  },
  {
    id: "64136edb8cc0058bfaf5884d",
  },
  {
    id: "64136edb21cea49c5eb1515f",
  },
  {
    id: "64136edb363f5c60fa6c5759",
  },
  {
    id: "64136edb80eee45c9fc469ca",
  },
  {
    id: "64136edb21fed3b2b6bef0f7",
  },
  {
    id: "64136edbf29183bf663da2bf",
  },
  {
    id: "64136edb37de36e9206d6f3f",
  },
  {
    id: "64136edb914d37cff5b51b6d",
  },
  {
    id: "64136edb21b0e685bb052c53",
  },
  {
    id: "64136edb4cf467cce350ed0f",
  },
  {
    id: "64136edb138cb188c3097376",
  },
  {
    id: "64136edb68dc8ea16e1bf0bb",
  },
  {
    id: "64136edb903efc2bda260c8d",
  },
  {
    id: "64136edbc3a413eedb4b5123",
  },
  {
    id: "64136edb822f3ef16d454b9b",
  },
  {
    id: "64136edb98e35ac08e8ee6e6",
  },
  {
    id: "64136edb91df8f279003e627",
  },
  {
    id: "64136edb4867c8f020718780",
  },
  {
    id: "64136edb14c08b689e57ebb5",
  },
  {
    id: "64136edb0cacadcd3353f5ca",
  },
  {
    id: "64136edbe2b1160a3ff271ee",
  },
  {
    id: "64136edbeb5ae4a1157d9ce7",
  },
  {
    id: "64136edb9679b7d9192e6a0c",
  },
  {
    id: "64136edbcf0bd9f8577095e6",
  },
  {
    id: "64136edb5e63a94a71454d66",
  },
  {
    id: "64136edbe8464135362a492a",
  },
  {
    id: "64136edbdebff3f922b0796a",
  },
  {
    id: "64136edb4e24205850898383",
  },
  {
    id: "64136edbc5c263517301bbf2",
  },
  {
    id: "64136edb2d9b9dbd32706d60",
  },
  {
    id: "64136edb7b4e21c1ffebdc49",
  },
  {
    id: "64136edbcc8adaea52520701",
  },
  {
    id: "64136edbfd0bb812fcfcfe5c",
  },
  {
    id: "64136edb316eb630242156d8",
  },
  {
    id: "64136edb9bcadb79b1f0597e",
  },
  {
    id: "64136edb5a47bb2834231c08",
  },
  {
    id: "64136edb9899453a944c3de2",
  },
  {
    id: "64136edb9c35cf2e4321c807",
  },
  {
    id: "64136edb56ee402fc579427c",
  },
  {
    id: "64136edb0dfadd28b7647f6e",
  },
  {
    id: "64136edb53d5e861cc9c2416",
  },
  {
    id: "64136edb242149a10d21b8d8",
  },
  {
    id: "64136edb589dd2d8069faf90",
  },
  {
    id: "64136edbb457cbc150ee8ace",
  },
  {
    id: "64136edb5ee3631a69771259",
  },
  {
    id: "64136edb19cfd15e8bd1d713",
  },
  {
    id: "64136edb655c6d8da0521754",
  },
  {
    id: "64136edba3b867c79b326299",
  },
  {
    id: "64136edb2a4dd2838043e314",
  },
  {
    id: "64136edbf9abfa0cb01f9380",
  },
  {
    id: "64136edb8e5c03d4ff37c406",
  },
  {
    id: "64136edbc472658a1f58ef47",
  },
  {
    id: "64136edbab1ef1ecf4968cf7",
  },
  {
    id: "64136edb0403641aab2b17a8",
  },
  {
    id: "64136edb96727392a060b3a2",
  },
  {
    id: "64136edb1d4a05fa0ecc507c",
  },
  {
    id: "64136edb389c10c490cdc43c",
  },
  {
    id: "64136edb30312d4e7e415bd3",
  },
  {
    id: "64136edba2b051a5b22660d7",
  },
  {
    id: "64136edbc70d261c290548bf",
  },
  {
    id: "64136edb45b5a05fdf14570d",
  },
  {
    id: "64136edbf0d9648973262b0e",
  },
  {
    id: "64136edbc74ba26a929ca112",
  },
  {
    id: "64136edb9e582b22c9e9a027",
  },
  {
    id: "64136edb42fe6b2bfe79f828",
  },
  {
    id: "64136edb6dbccf2914fedb68",
  },
  {
    id: "64136edb5afefdea8504bd69",
  },
  {
    id: "64136edbe6917ab02aefb0b9",
  },
  {
    id: "64136edb7e93438f2863bd8b",
  },
  {
    id: "64136edb0b1dcd3a59ab3efd",
  },
  {
    id: "64136edb2bffd152c1a1bbfa",
  },
  {
    id: "64136edbbf26729afec5eaaa",
  },
  {
    id: "64136edb16a499a837cfa129",
  },
  {
    id: "64136edbb359e0330ca0f1ee",
  },
  {
    id: "64136edbb1c29bd249d68437",
  },
  {
    id: "64136edb6670deced142d12f",
  },
  {
    id: "64136edbb7b8c106e51c223e",
  },
  {
    id: "64136edb28596720d895ea76",
  },
  {
    id: "64136edb49f712a2f08d776d",
  },
  {
    id: "64136edb30af155a4fe13d52",
  },
  {
    id: "64136edb64f2ac6577e5cc42",
  },
  {
    id: "64136edb077772dc724024aa",
  },
  {
    id: "64136edb53247625402c55e8",
  },
  {
    id: "64136edbe9867696a4922295",
  },
  {
    id: "64136edb5d793e843ed5c54f",
  },
  {
    id: "64136edb266bf2edf2f70d73",
  },
  {
    id: "64136edb633c669ca931c0fc",
  },
  {
    id: "64136edb28b520cc002aa85d",
  },
  {
    id: "64136edbca198fa69f2a2d25",
  },
  {
    id: "64136edbb0f694bfdc40ea7e",
  },
  {
    id: "64136edb9334293740f71f76",
  },
  {
    id: "64136edb83ae0d34f28547c0",
  },
  {
    id: "64136edb230f451c1abc8462",
  },
  {
    id: "64136edb3a98bb983013587d",
  },
  {
    id: "64136edb2f27d75fdbcd09f6",
  },
  {
    id: "64136edb93e2d5b947000f98",
  },
  {
    id: "64136edbf5e375613f48f8df",
  },
  {
    id: "64136edb69a30af800d3595d",
  },
  {
    id: "64136edbf518a292b7d1ebce",
  },
  {
    id: "64136edb1160fe16f32ef87c",
  },
  {
    id: "64136edbd142f2d3b4bcd613",
  },
  {
    id: "64136edb8d65a81335118d7e",
  },
  {
    id: "64136edb6fe9c03ba53e919e",
  },
  {
    id: "64136edb0e92fa9b21ee8f36",
  },
  {
    id: "64136edbe03dc7738b8a0ee6",
  },
  {
    id: "64136edb7fb159f241f92d18",
  },
  {
    id: "64136edb33b8fc78154c4b63",
  },
  {
    id: "64136edbd2dce563f6c77eef",
  },
  {
    id: "64136edb036e3337d2859f93",
  },
  {
    id: "64136edbc2e794e0a1b1ad0b",
  },
  {
    id: "64136edb8e7680ae75236d83",
  },
  {
    id: "64136edba3e4faa3015aeb31",
  },
  {
    id: "64136edb35397e534e217149",
  },
  {
    id: "64136edb35ecc3c7bb62ff51",
  },
  {
    id: "64136edbb9a467381a542573",
  },
  {
    id: "64136edbdb4f39da9eb1c22a",
  },
  {
    id: "64136edbf4a41b4ce3481943",
  },
  {
    id: "64136edbd490ffe1164abff5",
  },
  {
    id: "64136edb139b345c323577de",
  },
  {
    id: "64136edba37fdcc76d89649a",
  },
  {
    id: "64136edbaa996ebb0d196d8b",
  },
  {
    id: "64136edb56760095576beeab",
  },
  {
    id: "64136edb97bb7b5733330942",
  },
  {
    id: "64136edbf9b6544ced192abb",
  },
  {
    id: "64136edb2de20927bd2d7652",
  },
  {
    id: "64136edbd342d23f79372bac",
  },
  {
    id: "64136edb7d848e35403b3868",
  },
  {
    id: "64136edb39816450c1183c57",
  },
  {
    id: "64136edb9bf945d0ba0367b1",
  },
  {
    id: "64136edbfafd7ff159e8770c",
  },
  {
    id: "64136edb74a5d34f8e31d2ee",
  },
  {
    id: "64136edb371a7479ac177ba2",
  },
  {
    id: "64136edbb582f0eaaaa998f5",
  },
  {
    id: "64136edb52c7e2e0e3c66f7e",
  },
  {
    id: "64136edb7d7f3f0eda921a1b",
  },
  {
    id: "64136edb424b387c7f5740cd",
  },
  {
    id: "64136edb9703a9dcd77068b5",
  },
];

const oceaniaNames = [
  "PACIFIC OCEAN (40)",
  "Austral Islands",
  "Australia",
  "Bismarck Archipelago (Admiralty Islands, Bougainville, New Britain, New Ireland)",
  "Chatham Islands",
  "Cook Islands (Aitutaki, Penrhyn, Rarotonga)",
  "Easter Island",
  "Fiji Islands",
  "French Polynesia (Gambier, Tahiti, Tuamotu)",
  "Galapagos Islands",
  "Guam",
  "Hawaiian Islands",
  "Juan Fernandez Islands (Robinson Crusoe Island)",
  "Kiribati (Gilberts, Tarawa, Ocean Island)",
  "Line/Phoenix Islands (Canton, Christmas, Enderbury, Fanning)",
  "Lord Howe Island",
  "Marquesas Islands",
  "Marshall Islands, Republic of (Eniwetok, Kwajalein, Majuro)",
  "Micronesia, Fed.States of (Caroline Islands, Chuuk, Kosrae, Pohnpei, Yap)",
  "Midway Island",
  "Nauru",
  "New Caledonia & Dependencies (L’Île-des-Pins, Loyalty Islands)",
  "New Zealand",
  "Niue",
  "Norfolk Island",
  "Northern Marianas (Saipan, Tinian)",
  "Ogasawara (Bonin, Iwo Jima, Volcano Island)",
  "Palau, Republic of",
  "Papua New Guinea",
  "Pitcairn Island",
  "Ryukyu Islands (Okinawa)",
  "Samoa, American",
  "Samoa",
  "Solomon Islands (Guadalcanal, New Georgia, Tulagi)",
  "Tasmania",
  "Tokelau Islands (Atafu, Fakaofu, Union)",
  "Tonga (Nukualofa)",
  "Tuvalu (Ellice Island, Funafuti, Vaitapu)",
  "Vanuatu (New Hebrides Islands)",
  "Wake Island",
  "Wallis & Futuna Islands",
];

const northAmericaNames = [
  "Alaska",
  "Canada",
  "Mexico",
  "Prince Edward Island",
  "St. Pierre & Miquelon",
  "United States (Contiguous)",
  "Belize",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
];

const centralSouthAmericaNames = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "French Guiana",
  "Guyana",
  "Nueva Esparta (Margarita Island)",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
  "Anguilla",
  "Antigua & Barbuda",
  "Aruba",
  "Bahamas",
  "Barbados",
  "Bonaire",
  "Cayman Islands",
  "Cuba",
  "Curacao",
  "Dominica",
  "Dominican Republic",
  "Grenada & Dependencies (Carriacou, Grenadines)",
  "Guadeloupe & Dependencies (Marie Galante)",
  "Haiti",
  "Jamaica",
  "Martinique",
  "Montserrat",
  "Nevis",
  "Puerto Rico",
  "Saba & Sint Eustatius",
  "St. Barthélemy",
  "St. Kitts",
  "St. Lucia",
  "St. Martin (France)",
  "St. Vincent & the Grenadines",
  "San Andres & Providencia",
  "Sint Maarten (Netherlands)",
  "Trinidad & Tobago",
  "Turks & Caicos Islands",
  "Virgin Islands, British (Tortola, etc.)",
  "Virgin Islands, U.S. (St. Croix, St. John, St. Thomas)",
];

const asiaNames = [
  "Abkhazia",
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China, People’s Republic",
  "Georgia",
  "Hainan Island",
  "Hong Kong",
  "India",
  "Indonesia (Java)",
  "Japan",
  "Jeju Island (South Korea)",
  "Kalimantan (Indonesian Borneo)",
  "Kashmir",
  "Kazakhstan",
  "Korea, North",
  "Korea, South",
  "Kyrgyzstan",
  "Laos",
  "Lesser Sunda Islands (Bali, Timor, Indonesia)",
  "Macau",
  "Malaysia",
  "Maluku Islands",
  "Mongolia, Republic",
  "Myanmar (Burma)",
  "Nakhchivan",
  "Nepal",
  "Pakistan",
  "Papua (Irian Jaya)",
  "Philippines",
  "Russia in Asia (incl. Siberia)",
  "Sabah (North Borneo)",
  "Sarawak",
  "Sikkim",
  "Singapore",
  "South Ossetia",
  "Sri Lanka (Ceylon)",
  "Sulawesi (Celebes, Indonesia)",
  "Sumatra (Indonesia)",
  "Taiwan. R.O.C.",
  "Tajikistan",
  "Thailand",
  "Tibet",
  "Timor-Leste",
  "Turkey in Asia (Anatolia, Ankara, Izmir)",
  "Turkmenistan",
  "Uzbekistan",
  "Vietnam",
  "Andaman-Nicobar Islands",
  "British Indian Ocean Territory (Chagos Archipelago, Diego Garcia)",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Comoros (Anjouan, Grand Comoro, Moheli)",
  "Lakshadweep",
  "Madagascar",
  "Maldives",
  "Mauritius & Dependencies (Agalega, St. Brandon)",
  "Mayotte (Dzaoudzi)",
  "Reunion",
  "Rodrigues Island",
  "Seychelles",
  "Socotra",
  "Zil Elwannyen Sesel (Aldabra, Amirante Islands, Farquhar)",
];

const europeNames = [
  "Aland Islands",
  "Albania",
  "Andorra",
  "Austria",
  "Balearic Islands (Ibiza, Mallorca, Minorca)",
  "Belarus",
  "Belgium",
  "Bosnia & Herzegovina",
  "Bulgaria",
  "Corsica",
  "Crete",
  "Croatia",
  "Cyprus, British Sovereign Base Areas of Akrotiri & Dhekelia",
  "Cyprus, Republic",
  "Cyprus, Turkish Fed. State",
  "Czech Republic",
  "Denmark",
  "England",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Gibraltar",
  "Greece",
  "Greek Aegean Islands (Cyclades, Dodecanese,\nNorthern Aegean Islands)",
  "Guernsey & Dependencies (Alderney, Herm, Sark)",
  "Hungary",
  "Ionian Islands (Corfu, etc.)",
  "Ireland (Eire)",
  "Ireland, Northern",
  "Isle of Man",
  "Italy",
  "Jersey",
  "Kaliningrad",
  "Kosovo",
  "Lampedusa",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Sardinia",
  "Scotland",
  "Serbia",
  "Sicily",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Spitsbergen (Svalbard, Bear Island)",
  "Srpska",
  "Sweden",
  "Switzerland",
  "Transnistria (Pridnestrovie)",
  "Turkey in Europe (Istanbul)",
  "Ukraine",
  "Vatican City",
  "Wales",
];

const africaNames = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabinda",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Congo, Democratic Republic of (Kinshasa)",
  "Congo, Republic of (Brazzaville)",
  "Côte d’Ivoire (Ivory Coast)",
  "Djibouti",
  "Egypt in Africa",
  "Equatorial Guinea (Bioko)",
  "Equatorial Guinea (Rio Muni)",
  "Eritrea",
  "Eswatini (Swaziland)",
  "Ethiopia",
  "Gabon",
  "Gambia, The",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Malawi",
  "Mali",
  "Mauritania",
  "Morocco",
  "Morocco, Spanish (Ceuta, Melilla)",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome & Principe",
  "Senegal",
  "Sierra Leone",
  "Somalia (Italian Somaliland)",
  "Somaliland (British)",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Western Sahara",
  "Zambia",
  "Zanzibar",
  "Zimbabwe",
];

console.log(dataIds.length);

// add continent to each array and make object

const africaObj = africaNames.map((place) => {
  const newObj = {
    name: place,
    continent: "africa",
  };
  return newObj;
});

const europeObj = europeNames.map((place) => {
  const newObj = {
    name: place,
    continent: "europe",
  };
  return newObj;
});

const asiaObj = asiaNames.map((place) => {
  const newObj = {
    name: place,
    continent: "asia",
  };
  return newObj;
});

const northAmericaObj = northAmericaNames.map((place) => {
  const newObj = {
    name: place,
    continent: "north-america",
  };
  return newObj;
});

const centralSouthAmericaObj = centralSouthAmericaNames.map((place) => {
  const newObj = {
    name: place,
    continent: "south-america",
  };
  return newObj;
});

const oceaniaObj = oceaniaNames.map((place) => {
  const newObj = {
    name: place,
    continent: "oceania",
  };
  return newObj;
});

// ------- concatinate continent obj arrays

const allObjs = africaObj.concat(
  europeObj,
  asiaObj,
  northAmericaObj,
  centralSouthAmericaObj,
  oceaniaObj
);

// console.log(allObjs);

// ---- function to get random season
const seasons = ["summer", "winter", "autumn", "spring"];

const randomSeason = () => {
  return seasons[Math.floor(Math.random() * seasons.length)];
};

const objWithSeason = allObjs.map((obj) => {
  const seasonObj = {
    ...obj,
    season: randomSeason(),
  };

  return seasonObj;
});

// ----- function to get random occasion
const occasions = ["stag", "honeymoon", "girls", "family"];

const randomOccasion = () => {
  return occasions[Math.floor(Math.random() * occasions.length)];
};

const objWithOccasion = objWithSeason.map((obj) => {
  const occasionObj = {
    ...obj,
    occasion: randomOccasion(),
  };
  return occasionObj;
});

const data = objWithOccasion.map((obj, i) => {
  const finalObj = {
    ...obj,
    ...dataIds[i],
  };
  return finalObj;
});

// console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[data.length - 1]);

console.log(
  africaNames.length +
    europeNames.length +
    asiaNames.length +
    centralSouthAmericaNames.length +
    northAmericaNames.length +
    oceaniaNames.length
);

fs.writeFile("./data/destinations.json", JSON.stringify(data), (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file saved");
});
