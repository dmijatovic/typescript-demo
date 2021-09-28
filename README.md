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
