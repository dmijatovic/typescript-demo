
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean":
  unknown

function typeName<T>(x:T):TypeName<T>{
  return typeof x as TypeName<T>
}

const str = typeName("hello")