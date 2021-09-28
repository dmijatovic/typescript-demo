
let exampleAny: any;
let exampleUknown: unknown;

// any accepts any type
exampleAny = 1
exampleAny = "string"

// uknown accepts any type
exampleUknown = 1
exampleUknown = "string"

// any skips any type checks
exampleAny.allows.anything.you.can.imagine();
//  can be also assigned
let state:boolean = exampleAny

// unkown will have check on assignment
// otherwise will produce compile error
if (typeof exampleUknown == 'string'){
  // here is OK
  exampleUknown.trim()
}

// without check it is not OK
// exampleUknown.trim()

// OR use TYPE assertion
(exampleUknown as string).trim()