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
// point.x = 5