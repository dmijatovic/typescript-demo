
const person={
  name: "John Doe",
  age: 25,
  location: "Amsterdam",
  dateOfBirth: new Date('1970-11-11')
}

// make type from person object
type PersonObject = typeof person
// make type from person keys
type PersonKeys = keyof PersonObject

function getPersonProp(item:PersonObject, key: PersonKeys){
  return item[key]
}

// using generic type it can be made generic for any object
function getProp<T, Key extends keyof T>(item:T,key: Key){
  return item[key]
}

// typesafe function for writing props
function setProp<T, Key extends keyof T>(item:T,key: Key,value:T[Key]){
  item[key]=value
}


const age = getPersonProp(person,"age")
const dateOfBirth = getProp(person,"dateOfBirth")
// it can be used with arrays
const pos2 = getProp([1,2,3,4,5],3)

setProp(person,"dateOfBirth",new Date("1970-12-12"))