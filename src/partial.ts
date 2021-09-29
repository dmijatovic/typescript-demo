
type Animal={
  name: string
  legs: number
  sound: string
}


function updateAnimal(item:Animal,prop: Partial<Animal>){
  return {
    ...item,
    prop
  }
}

const horse:Animal={
  name:"Horse",
  legs: 4,
  sound: "Yhiiia"
}

updateAnimal(horse,{sound:"Hjkihaah"})