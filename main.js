const gods = [
    {
        name:"Achilles",
        type: "Warrior",
        profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsmite_gamepedia%2Fimages%2F6%2F66%2FSkinArt_Achilles_Default.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20180309034323&tbnid=oxa0OjI4zWLpdM&vet=12ahUKEwjO1aOkneL_AhUHkrAFHQJyBJkQMygAegUIARDkAQ..i&imgrefurl=https%3A%2F%2Fsmite.fandom.com%2Fwiki%2FAchilles&docid=eFYJHZsECb7i8M&w=250&h=333&q=achilles%20smite&ved=2ahUKEwjO1aOkneL_AhUHkrAFHQJyBJkQMygAegUIARDkAQ"
    },
    {
        name:"Agni",
        type: "Mage",
        profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsmite_gamepedia%2Fimages%2F2%2F29%2FSkinArt_Agni_Default.jpg%2Frevision%2Flatest%3Fcb%3D20160505051933&tbnid=6XXUUQXOEHspkM&vet=12ahUKEwjchqetneL_AhUhg4kEHSrSAiUQMygAegQIARB2..i&imgrefurl=https%3A%2F%2Fsmite.fandom.com%2Fwiki%2FAgni&docid=bqnX4jIqh1MNMM&w=750&h=1000&q=agnismite&ved=2ahUKEwjchqetneL_AhUhg4kEHSrSAiUQMygAegQIARB2"
    },
    {
        name:"Ah Muzen Cab",
        type: "Hunter",
        profilePic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsmite_gamepedia%2Fimages%2F1%2F10%2FSkinArt_AhMuzenCab_Default.jpg%2Frevision%2Flatest%3Fcb%3D20160505051943&tbnid=Ej2EdkHd_MsqXM&vet=12ahUKEwicg_q5neL_AhXAkokEHe_XA_oQMygAegUIARDfAQ..i&imgrefurl=https%3A%2F%2Fsmite.fandom.com%2Fwiki%2FAh_Muzen_Cab&docid=j9KffpGLbmnuTM&w=750&h=1000&q=ah%20muzen%20cab%20smite&ved=2ahUKEwicg_q5neL_AhXAkokEHe_XA_oQMygAegUIARDfAQ"
    },
    {
        name:"Ah Puch",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c9/SkinArt_AhPuch_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505051959"
    },
    {
        name:"Amaterasu",
        type: "Warrior",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8a/SkinArt_Amaterasu_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160108210941"
    },
    {
        name:"Anhur",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/1e/SkinArt_Anhur_Default.jpg/revision/latest?cb=20160505052008"
    },
    {
        name:"Anubis",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/59/SkinArt_Anubis_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052018"
    },
    {
        name:"Ao Kuang",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3b/SkinArt_AoKuang_Default.jpg/revision/latest?cb=20160505052030"
    },
    {
        name:"Aphrodite",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3b/SkinArt_Aphrodite_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052038"
    },
    {
        name:"Apollo",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite/images/b/bd/Apollo.jpg/revision/latest?cb=20140503051317"
    },
    {
        name:"Arachne",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite/images/c/c1/Arachne.jpg/revision/latest?cb=20160428165000"
    },
    {
        name:"Ares",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/33/SkinArt_Ares_Default.jpg/revision/latest/scale-to-width-down/250?cb=20200716001425"
    },
    {
        name:"Artemis",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite/images/9/96/Artemis.jpg/revision/latest?cb=20150425225723"
    },
    {
        name:"Artio",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/4c/SkinArt_Artio_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170728125143"
    },
    {
        name:"Athena",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite/images/8/83/Athena.jpg/revision/latest?cb=20150425230038"
    },
    {
        name:'Atlas',
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/95/SkinArt_Atlas_Default.jpg/revision/latest?cb=20220421093906"
    },
    {
        name:"Awilix",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/00/SkinArt_Awilix_Default.jpg/revision/latest?cb=20160505052122"
    },
    {
        name:"Baba Yaga",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/23/SkinArt_BabaYaga_Default.jpg/revision/latest?cb=20200603102402"
    },
    {
        name:"Bacchus",
        type: "Guardian",
        profilePic: "https://i.redd.it/ocighiiuref71.jpg"
    },
    {
        name:"Bakasura",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite/images/4/4f/Bakasura.jpg/revision/latest?cb=20141015183458"
    },
    {
        name:"Baron Samedi",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/38/SkinArt_BaronSamedi_Default.jpg/revision/latest?cb=20180628042044"
    },
    {
        name:"Bastet",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c7/SkinArt_Bastet_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052145"
    },
    {
        name:"Bellona",
        type: "Warrior",
        profilePic: "https://static.wikia.nocookie.net/smite/images/f/f5/Bellona.jpg/revision/latest?cb=20150304012246"
    },
    {
        name:"Cabrakan",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite/images/6/63/Cabrakan.jpg/revision/latest?cb=20140819124123"
    },
    {
        name:"Camazotz",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/5a/SkinArt_Camazotz_Default.jpg/revision/latest?cb=20161005211230"
    },
    {
        name:"Cerberus",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/de/SkinArt_Cerberus_Default.jpg/revision/latest?cb=20180109181100"
    },
    {
        name:"Cernunnos",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/f/f0/SkinArt_Cernunnos_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170308234455"
    },
    {
        name:"Chaac",
        type: "Warrior",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e4/SkinArt_Chaac_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052215"
    },
    {
        name:"Chang'e",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/95/SkinArt_ChangE_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052226"
    },
    {
        name:"Charybdis",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/94/SkinArt_Charybdis_Default.jpg/revision/latest?cb=20210825012544"
    },
    {
        name:"Chernobog",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/65/SkinArt_Chernobog_Default.jpg/revision/latest?cb=20180421205659"
    },
    {
        name:"Chiron",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8b/SkinArt_Chiron_Default.jpg/revision/latest?cb=20151111222807"
    },
    {
        name:"Chronos",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a8/SkinArt_Chronos_Default.jpg/revision/latest?cb=20160505052233"
    },
    {
        name:"Cliodhna",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/64/T_Cliodhna_Default_Card.png/revision/latest?cb=20211019210542"
    },
    {
        name:"Cthulhu",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/22/SkinArt_Cthulhu_Default.jpg/revision/latest?cb=20200616161842"
    },
    {
        name:"Cu Chulainn",
        type: "Warrior",
        profilePic: "https://static.wikia.nocookie.net/smite/images/1/15/CuChulainn.jpg/revision/latest?cb=20170614211851"
    },
    {
        name:"Cupid",
        type: "Hunter",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/69/SkinArt_Cupid_Default.jpg/revision/latest?cb=20160505052246"
    },
    {
        name:"Da Ji",
        type: "Assassin",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/43/SkinArt_DaJi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170517230119"
    },
    {
        name:"Danzaburou",
        type: "Hunter",
        profilePic: "https://static.smite.guru/i/champions/cards/danzaburou.jpg"
    },
    {
        name:"Discordia",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/58/SkinArt_Discordia_Default.jpg/revision/latest/scale-to-width-down/250?cb=20171106214703"
    },
    {
        name:"Erlang Shen",
        type: "Warrior",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/01/SkinArt_ErlangShen_Default.jpg/revision/latest?cb=20160630021258"
    },
    {
        name:"Eset",
        type: "Mage",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/47/SkinArt_Eset_Default.jpg/revision/latest?cb=20191112163619"
    },
    {
        name:"Fafnir",
        type: "Guardian",
        profilePic: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/49/SkinArt_Fafnir_Default.jpg/revision/latest?cb=20160607220723"
    },
    // {
    //     name:"Fenrir",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Freya",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Ganesha",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Geb",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Gilgamesh",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Guan Yu",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Hachiman",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Hades",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"He Bo",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Heimdallr",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Hel",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Hera",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Hercules",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Horus",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Hou Yi",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Hun Batz",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Ishtar",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Ix Chel",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Izanami",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Janus",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Jing Wei",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Jormungandr",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Kali",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Khepri",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"King Arthur",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Kukulkan",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Kumbhakarna",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Kuzenbo",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Lancelot",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Loki",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Martichoras",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Maui",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Medusa",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Mercury",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Merlin",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Morgan Le Fay",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Mulan",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Ne Zha",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Neith",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Nemesis",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Nike",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Nox",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Nu Wa",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Odin",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Olorun",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Osiris",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Pele",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Persephone",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Poseidon",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Ra",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Raijin",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Rama",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Ratatoskr",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Ravana",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Scylla",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Serqet",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Set",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Shiva",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Skadi",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Sobek",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Sol",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Sun Wukong",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Surtr",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Susano",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Sylvanus",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Terra",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Thanatos",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"The Morrigan",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Thor",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Thoth",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Tiamat",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Tsukuyomi",
    //     type: "Assassin",
    //     profilePic: ""
    // },
    // {
    //     name:"Tyr",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Ullr",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Vamana",
    //     type: "Warrior",
    //     profilePic: ""
    // },
    // {
    //     name:"Vulcan",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Xbalanque",
    //     type: "Hunter",
    //     profilePic: ""
    // },
    // {
    //     name:"Xing Tian",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Yemoja",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Ymir",
    //     type: "Guardian",
    //     profilePic: ""
    // },
    // {
    //     name:"Yu Huang",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Zeus",
    //     type: "Mage",
    //     profilePic: ""
    // },
    // {
    //     name:"Zhong Kui",
    //     type: "Mage",
    //     profilePic: ""
    // }
]

// const populateGods = (gods) => {

    // const selector = document.getElementById("selector");
//     for(let i = 0; i < gods.length; i++) {

//         if(i % 3 == 0) {
//             const row = document.createElement("div");
//             row.setAttribute("class", "row");
//             selector.appendChild(row);
//         }
//         const newGodDiv = document.createElement("div");
//         const newGodContent = document.createTextNode(gods[i].name);
        
            

//         };
//         newGodDiv.appendChild(newGodContent);
//         newGodDiv.setAttribute("name", gods[i].name);
//         selector.appendChild(newGodDiv);
//     }

// };



