const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat = {
    complain: function complainVerse() {
        console.log("Meow");
    }
}
cat.complain();

//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    let loopParagraph = paragraphs[i];
    //console.log(loopParagraph);
    loopParagraph.style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");
const backgroundParagraph = "yellow";
resultsContainer.innerHTML = `<p style ="background-color: ${backgroundParagraph}"> New paragraph </p>`;

//Question 7

function myFunction(list) {

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
myFunction(cats);

//Question 8

let objectHtml = "";

function createCats(cats) {

    for (let i = 0 ; i < cats.length; i++) {

    let age = cats[i].age;

    if (!age) {
        age = "Age unknown";
    }  

     objectHtml += `<div>
                        <h5>${cats[i].name}</h5>
                        <p>${age}<p/>
                    </div>`;

    }
    return objectHtml;
}
createCats(cats)
console.log(objectHtml);
let toHtmlCatContainer = document.querySelector(".cat-container");

toHtmlCatContainer.innerHTML = objectHtml;