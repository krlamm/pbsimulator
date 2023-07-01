import {
    gods
} from './gods.js';

const populateGods = (gods, type) => {
    for (let i = 0; i < gods.length; i++) {

        switch(type) {
            case "Warrior":
                if (gods[i].type == "Warrior") {
                    createGodElement(gods[i].name, gods[i].type);
                }
                break;
            case "Mage":
                if (gods[i].type == "Mage") {
                    createGodElement(gods[i].name, gods[i].type);
                }
                break;
            case "Hunter":
                if (gods[i].type == "Hunter") {
                    createGodElement(gods[i].name, gods[i].type);
                }
                break;
            case "Guardian":
                if (gods[i].type == "Guardian") {
                    createGodElement(gods[i].name, gods[i].type);
                }
                break;
            case "Assassin":
                if (gods[i].type == "Assassin") {
                    createGodElement(gods[i].name, gods[i].type);
                }
                break;
        }
    }
}

const createGodElement = (godName, godType) => {

    const newGodDiv = document.createElement("div");
    newGodDiv.setAttribute("data-name", godName);
    newGodDiv.setAttribute("class", "god");
    newGodDiv.setAttribute("data-type", godType);
    
    const newGodName = document.createElement("p");
    const nameNode = document.createTextNode(godName)
    newGodName.append(nameNode);
    
    const newGodImg = document.createElement("img");
    newGodImg.setAttribute("src", `./imgs/${godName}.webp`);
    newGodImg.setAttribute("alt", `${godName} picture`);

    newGodDiv.appendChild(newGodName);
    newGodDiv.appendChild(newGodImg);

    newGodDiv.onclick = (e) => {
        pickGod(godName);
    }
    const picks = document.getElementById("picks");
    picks.appendChild(newGodDiv);
}

const emptyGods = () => {
    const picks = document.getElementById("picks");
    picks.innerHTML = "";
}

const pickGod = (name) => {
    alert("pickGod")

    const row1Round1Pick1 = document.getElementsByClassName("pick");
    console.log(row1Round1Pick1[0]);
    row1Round1Pick1[0].innerHTML = name;
    
}


// const hirez = require("hirez-api");
// const api = new hirez.Paladins({
//     platform: "PC",
//     devId: config.hirez_dev_id,
//     authKey: config.hirez_auth_key,
// });
// api.getMatchDetails(123456789).then(console.log);

window.onload = () => {
    const types = document.getElementsByClassName("type");

    for (let i = 0; i < types.length; i++) {
        console.log(types[i])
        types[i].onclick = (event) => {
            emptyGods();
            populateGods(gods, event.target.innerHTML)
        }
    }

    // const gods = document.getElementsByClassName("god");

    // for(let i = 0; i < gods.length; i++) {
    //     gods[i].onclick = (event) => {
    //         alert(gods[i].name)
    //     }
    // }
}