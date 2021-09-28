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