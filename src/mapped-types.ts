type PointType={
  x: number,
  y: number,
  z: number
}

type ReadOnlyPoint={
  // readonly prop before loop
  // loop using in keyof
  readonly [Item in keyof PointType]: number
}

const center:ReadOnlyPoint={
  x:0,
  y:1,
  z:3
}

// is read only -> cannot be assigned
// center.x = 1

// This example maps all props as optional
// note ? added in the loop
type MapAsOptional<T>={
  [Item in keyof T]?:T[Item]
}

type OptionalPointType=MapAsOptional<PointType>