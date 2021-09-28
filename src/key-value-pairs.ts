
type PersonType = {
  name: string,
  email: string,
  dateOfBirth: Date
}

type PersonsDictionary = {
  [username:string]: PersonType |undefined
}

// create persons object
const persons: PersonsDictionary = {
  jane: {
    name:'Jane Doe',
    email: 'j.doe@me.com',
    dateOfBirth: new Date('1970-11-11')
  }
}

// add new person
persons['john']= {
  name: 'John Doe',
  email:'j.d@dot.com',
  dateOfBirth: new Date("1900-1-1")
}

// access properties
console.log(persons['jane']?.dateOfBirth.toISOString())
// use | undefined to cover possibility of non existing
// properties
persons['non-existing']?.dateOfBirth