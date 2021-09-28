// EXAMPLE 1

type Squares = {
  kind: 'square'
  size: number
}

type Rectangles = {
  kind: 'rectangle'
  width: number,
  height: number
}

type Shapes = Squares | Rectangles

function area (shape:Shapes){
  // determine if square
  // by checking for unique property
  if (shape.kind==='square'){
    return shape.size * 2
  }
  if (shape.kind="rectangle"){
    return shape.width * shape.height
  }
}

area({size:2, kind:"square"})
area({width:2,height:3, kind:'rectangle'})

// EXAMPLE 2

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

log({isValid:true, message:"This is OK"})