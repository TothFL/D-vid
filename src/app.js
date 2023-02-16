
const ul = document.querySelector("#lista");

//li elem generálása

var li = document.createElement("li");
li.textContent = "Erdeti placeholder";
ul.append(li);


//-------------------------------------------------

const gyumolcsok = ["szilva", "alma", "körte", "barack"];

gyumolcsok.forEach((gyumolcs) => {
    var li = document.createElement("li");
    li.textContent = gyumolcs;
    ul.append(li);
});

//-------------------------------------------------

const gyumolcsok2 = ["Banán", "Dinnye", "Anananász"];

gyumolcsok2.forEach(myFunction);

function myFunction(element){
    var li = document.createElement("li");
    li.textContent = element;
    ul.append(li);
}

//-------------------------------------------------

const tbody = document.querySelector("#tbody");

const reszletesGyumolcsok=[
    {name: "Szilva", quantity: "77", price:"1000"},
    {name: "Alma", quantity: "12", price:"9567"},
    {name: "Körte", quantity: "43", price:"3467"},
    {name: "Barack", quantity: "4", price:"1978"},
    {name: "Dinnye", quantity: "31", price:"3451"},
    {name: "Banán", quantity: "23", price:"7564"}
];

function generateTbody(){
    reszletesGyumolcsok.forEach((elemek)=>{
        console.log(elemek);
    });
}

generateTbody();