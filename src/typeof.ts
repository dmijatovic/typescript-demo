// JSON payload
const personPayload={
  "name":"Jonh Doe",
  "email": "j.d.@dot.com",
  "dateOfBirth": "1970-11-01",
  "heightInCm": 175,
  "wightInKg": 70
}
// convert it to type
type PersonPayload = typeof personPayload

// use it
function showPersonName(person:PersonPayload){
  console.log("Your name is: ", person.name)
}