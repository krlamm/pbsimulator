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
    newGodDiv.setAttribute("draggable", "true");
    
    const newGodName = document.createElement("p");
    const nameNode = document.createTextNode(godName)
    newGodName.append(nameNode);
    
    const newGodImg = document.createElement("img");
    newGodImg.setAttribute("src", `./imgs/${godName}.webp`);
    newGodImg.setAttribute("alt", `${godName} picture`);

    newGodDiv.appendChild(newGodName);
    newGodDiv.appendChild(newGodImg);

    newGodDiv.addEventListener("dragstart", () => {
        newGodDiv.classList.add("dragging");
    })

    newGodDiv.addEventListener("dragend", () => {
        newGodDiv.classList.remove("dragging");
        // newGodDiv.parentNode.innerHTML = "";
    })

    const picks = document.getElementById("picks");
    picks.appendChild(newGodDiv);
}

const emptyGods = () => {
    const picks = document.getElementById("picks");
    picks.innerHTML = "";
}

const pickGod = (name) => {
    const row1Round1Pick1 = document.getElementsByClassName("pick");
    console.log(row1Round1Pick1[0]);
    row1Round1Pick1[0].innerHTML = name;
}

const banContainers = document.getElementsByClassName("pick");
for(let i = 0; i < banContainers.length; i++) {
    banContainers[i].addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    banContainers[i].addEventListener("drop", () => {
        console.log("dropped")
        const draggable = document.querySelector('.dragging');
        banContainers[i].appendChild(draggable);
    });
}

const pickContainers = document.getElementsByClassName("player");
for(let i = 0; i < pickContainers.length; i++) {
    pickContainers[i].addEventListener("dragover", (event) => {
       event.preventDefault();
    });

    pickContainers[i].addEventListener("drop", () => {
        console.log("dropped")
        const draggable = document.querySelector('.dragging');
        pickContainers[i].appendChild(draggable);
    });
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