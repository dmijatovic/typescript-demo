// Interface enables merging of declarations
// in this example we extend/merge Request interface
// this is handy when using middleware that extend basic
// interface
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