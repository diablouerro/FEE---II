const nameBox = document.getElementById("name");
const genderBox = document.getElementById("gender");
const heightBox = document.getElementById("height");


const url = "https://swapi.dev/api/people/1";

fetch(url) 
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
    nameBox.innerHTML = data.name;
    genderBox.innerHTML = data.gender;
    heightBox.innerHTML = data.height;
})
