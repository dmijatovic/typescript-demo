# Typescript

This repo holds the typescript wisdom :-)
It is based on [Udemy training made by Basarat Ali Syed](https://udemy.com/course/typescript-for-professionals)

## How to use?

Readme file explains some of the concepts I find interessting and usefull. For the most of these concepts there is a typescript file in the src folder.

## Initialize project

```bash
# install typescript
npm i -D typescript
# crate tsconfig.json
npx tsc --init
```

## Structural typing

Typescript examines the props of an object and see if these match.

```Typescript
type Point2D={x:number, y:number}
type Point3D={x:number, y:number, z:number}

let point2D:Point2D={x:1,y:1}
let point3D:Point3D={x:2,y:2,z:1}

// extra info is OK
point2D = point3D

// missing info creates error
// point3D = point2D

// passing params with more pros is OK too
function takePoint2D(point:Point2D){
  return point
}
takePoint2D(point3D)
```

## Generics

Generic enables use of function/class/method with the multiple types while having the typesafety (up to a level).

```Typescript
// support generic array structure
function Queue<T>(data:T[]){
  // let data:T[]
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

const newQueue = Queue<number>([1,2,3])
newQueue.push(4)
newQueue.push(5)
console.log(newQueue.pop())
console.log(newQueue.get())


const strQueue = Queue<string>(['1','2','3'])
strQueue.push('4')
strQueue.push('5')
console.log(strQueue.pop())
console.log(strQueue.get())

```

### Extend generic type

```typescript
// EXTEND GENERIC type and add constraints

type NameFields = {
  firstName: string;
  lastName: string;
};

function addFullName<T extends NameFields>(
  person: T
): T & { fullName: string } {
  return {
    ...person,
    fullName: `${person.firstName} & ${person.lastName}`,
  };
}

const john = addFullName({
  firstName: "John",
  lastName: "Doe",
  email: "j.d@dot.com",
});

console.log(john.fullName);
```

## Read only modifier

It can be specified if an prop can be modified

```Typescript
type Point = {
  readonly x:number
  y:number
}

const point:Point = {
  x:0,
  y:0
}

// this can be changes
point.y = 5
// thisone is READONLY
point.x = 5

```

## Literal types

```Typescript
// define specific values
type DiceValues=1|2|3|4|5|6

const newDice:DiceValues = 3
// type error
newDice = 7


type Direction = "North"|"East"|"South"|"West"
let myDirection:Direction = "North"
// type error
myDirection = "east"
```

## Union types

Shared field is used to discriminate between union members

```Typescript

type Success = {
  isValid: true,
  message: string
}

type Failure = {
  isValid: false
  errMsg: string
}

type Status = Success | Failure

function log(status:Status){
  if (status.isValid){
    console.log(status.message)
  }
  if (status.isValid===false){
    console.error(status.errMsg)
  }
}

```

## Intersection types

Extending types using &

```Typescript

type Points = {
  x:number
  y:number
}

type Points3D = Points & {
  z: number
}

```

## Interface declaration merging

Interface enables merging of declarations, in this example we extend/merge Request interface. This is usefull when middleware is able to extend basic interface.

```Typescript
interface Request {
  body: any
}

// later in the code
// or by some middleware
// we extend this interface with json
interface Request {
  json: any
}

function handleRequest(req:Request){
  console.log(req.body)
  console.log(req.json)
}
```

## Function overloading

Used to overload different return types.

```typescript
// overloading ensures better return types
// when multiple return types are possible
function reverse(value: string): string;
function reverse(value: string[]): string[];
function reverse(value: string | string[]) {
  if (typeof value == "string") {
    return value.split("").reverse().join();
  } else {
    return value.slice().reverse();
  }
}

const hello = reverse("hello");
const arrHello = reverse(["h", "e", "l", "l", "o"]);
```

## Index signatures

```typescript
type PersonType = {
  name: string;
  email: string;
  dateOfBirth: Date;
};

type PersonsDictionary = {
  [username: string]: PersonType | undefined;
};

// create persons object
const persons: PersonsDictionary = {
  jane: {
    name: "Jane Doe",
    email: "j.doe@me.com",
    dateOfBirth: new Date("1970-11-11"),
  },
};

// add new person
persons["john"] = {
  name: "John Doe",
  email: "j.d@dot.com",
  dateOfBirth: new Date("1900-1-1"),
};

// access properties
console.log(persons["jane"]?.dateOfBirth.toISOString());
// use | undefined to cover possibility of non existing
// properties
persons["non-existing"]?.dateOfBirth;
```

## Convert JSON payload / object to type

As typescript does type inferance on the object we can paste JSON payload into an object and make type of of that object.

```typescript
// JSON payload
const personPayload = {
  name: "Jonh Doe",
  email: "j.d.@dot.com",
  dateOfBirth: "1970-11-01",
  heightInCm: 175,
  wightInKg: 70,
};
// convert it to type
type PersonPayload = typeof personPayload;

// use it
function showPersonName(person: PersonPayload) {
  console.log("Your name is: ", person.name);
}
```

## Lookup types

Long type objects can be broken into a smaller sections using lookup types. This means that we can reffer to a part of the larger type.

```typescript
const longObjectWitLotProps = {
  propTree1: {
    strProp1: "string",
    blProp1: true,
    nProp1: 1,
    dProp1: new Date(),
    propChildTree1: {
      strProp1: "B",
      blProp1: false,
    },
  },
  propTree2: {
    strProp1: "string",
    strProp2: "string",
    strProp3: "string",
    nProp1: 1,
    dProp1: new Date(),
  },
};

// copy object to be a type
type LongObjectWitLotProps = typeof longObjectWitLotProps;
// reffer to part of the larger type
type PropTree2 = LongObjectWitLotProps["propTree2"];

function getPropTree2(data: LongObjectWitLotProps): PropTree2 {
  return data["propTree2"];
}

function newPropTree2(partial: PropTree2, data: unknown): void {
  if (typeof data == "object" && data != null) {
    data = {
      ...data,
      partial,
    };
  }
}

// get tree 2
const tree2 = getPropTree2(longObjectWitLotProps);
// change something
tree2.strProp1 = "Changed";
// updated
newPropTree2(tree2, longObjectWitLotProps);
```

## Keyof type operator

You can use keyof to extract exact type from the object

```typescript
const person = {
  name: "John Doe",
  age: 25,
  location: "Amsterdam",
  dateOfBirth: new Date("1970-11-11"),
};

// make type from person object
type PersonObject = typeof person;
// make type from person keys
type PersonKeys = keyof PersonObject;

function getPersonProp(item: Person, key: PersonKeys) {
  return item[key];
}

const age = getPersonProp(person, "age");
```

## Conditional types

The conditional types returns a type based on conditional. The approach is similair to iternary operator in Javascript.

```typescript
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : unknown;

function typeName<T>(x: T): TypeName<T> {
  return typeof x as TypeName<T>;
}

const str = typeName("hello");
```

## Infer return type

It enables you to infer type from value returned from another function.

```typescript
function createPerson(first: string, last: string) {
  return {
    firstName: first,
    lastName: last,
    fullName: `${first} ${last}`,
  };
}

// infer param type from function return type
function logPerson(person: ReturnType<typeof createPerson>) {
  console.log("Person full name: ", person.fullName);
}
```

## Mapped types

You can map types programatically and change these to optional or readyonly.

```typescript
type PointType = {
  x: number;
  y: number;
  z: number;
};

type ReadOnlyPoint = {
  readonly // readonly prop before loop
  // loop using in keyof
  [Item in keyof PointType]: number;
};

const center: ReadOnlyPoint = {
  x: 0,
  y: 1,
  z: 3,
};

// is read only -> cannot be assigned
center.x = 1;

// This example maps all props as optional
// note ? added in the loop
type MapAsOptional<T> = {
  [Item in keyof T]?: T[Item];
};

type OptionalPointType = MapAsOptional<PointType>;
```

## Partial keyword

You can use this keyword to indicate that function uses a part of the existing type. Very usefull for typing update functions that do partial updates of and object

```typescript
type Animal = {
  name: string;
  legs: number;
  sound: string;
};

function updateAnimal(item: Animal, prop: Partial<Animal>) {
  return {
    ...item,
    prop,
  };
}

const horse: Animal = {
  name: "Horse",
  legs: 4,
  sound: "Yhiiia",
};

updateAnimal(horse, { sound: "Hjkihaah" });
```
