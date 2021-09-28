type Square = {
  size: number
  height?: number
}

type Rectangle = {
  width: number,
  height: number
}

type Shape = Square | Rectangle

function area1 (shape:Shape){
  // determine if square
  // by checking for unique property
  if ('size' in shape){
    return shape.size * 2
  }
  if ('width' in shape){
    return shape.width * shape.height
  }
}

area1({size:2})
area1({width:2,height:3})