const CARDS_CONTAINER = document.querySelector("#card-container");
const USER = {
    id: 1,
    username: "Ginna PG",
    desc: "Sobre mi",
    age: 24,
    fav_musical: {
        musical: ["The Phantom of the opera", "Chicago", "La La Land", "Les Miserables", "Into the Woods",
        ],
    },
};


const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const musical_section = document.createElement("div");
// lista -----------------------------------------
const musicalList = USER.fav_musical.musical.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(musicalList);

 
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
musical_section.append(...musicalList);
card.append(name_section, desc_section, age_section, musical_section); 

CARDS_CONTAINER.appendChild(card);


//Pelis
