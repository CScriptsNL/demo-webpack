let xmlhttp = new XMLHttpRequest();
// Stringify
let personA = {
  fullName:{
	fisrtName:"Michael",
	lastName:"van der Putten"
  },
  birthDate:"22 april 1978"
}
personA = JSON.stringify(personA);
function getData() {
  personA = JSON.parse(personA)
  console.log("Birthdate of " + personA.fullName.fisrtName + " " + personA.fullName.lastName + " is " + personA.birthDate);
}
// JSON file
function getDataX() {
  let xmlhttp = new XMLHttpRequest();
  let file = "data.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let personB = JSON.parse(this.responseText);
      console.log(personB.personen[0].birthDate);
    }
  }
  xmlhttp.open("GET", file, false);
  xmlhttp.send(null);
}
