/*
* Crear tarjeta
* Crear secciones para tarjeta
* Img
* Nombre, desc, edad, lista de algo
* Insertar en la tarjeta
* Mostrar dentro de div.container
*/

const CARDS_CONTAINER = document.querySelector("#card-container");
//const CARDS_CONTAINER = document.getElementById("card-container");
const USER = {
    id: 1,
    username: "User Name",
    desc: "Sobre mi",
    age: 27,
    fav_books: {
        books: ["Harry Potter", "M", "After", "El principito", "La chica del tren",
        ],
    },
};

//CREAR TARJETA
const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");
// lista -----------------------------------------
const booklist = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(booklist);

//Crear tarjeta
//Inyectando información 
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...booklist);
card.append(name_section, desc_section, age_section, book_section); 
//Crear la tarjeta con esa información

//Inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);
