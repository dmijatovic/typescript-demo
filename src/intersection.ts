type Points = {
  x:number
  y:number
}

type Points3D = Points & {
  z: number
}

// EXAMPLE 2

type Person = {
  name: string
}

type Email = {
  email: string
}

type Phone = {
  phone: string
}

// combining it into new type
type ContactDetails = Person & Email & Phone

function contact(details: ContactDetails){
  console.log(details.name)
}