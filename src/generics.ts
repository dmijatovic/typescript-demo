function Queue<T>(data:T[]){
  return {
    push: function Push (item:T):void{
      data.push(item)
    },
    pop: function Pop():T|undefined{
      return data.shift()
    },
    get: function():T[]{
      return data
    }
  }
}

// EXTEND GENERIC type and add constraints

type NameFields ={
  firstName:string,
  lastName: string
}

export function addFullName<T extends NameFields>(person:T):T & {fullName:string}{
  return {
    ...person,
    fullName: `${person.firstName} & ${person.lastName}`
  }
}

export default Queue
