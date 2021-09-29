

function createPerson(first:string,last:string){
  return {
    firstName:first,
    lastName: last,
    fullName: `${first} ${last}`
  }
}

// infer param type from function return type
function logPerson(person: ReturnType<typeof createPerson>){
  console.log("Person full name: ", person.fullName)
}