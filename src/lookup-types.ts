
const longObjectWitLotProps = {
  propTree1:{
    strProp1: 'string',
    blProp1: true,
    nProp1: 1,
    dProp1: new Date(),
    propChildTree1:{
      strProp1: 'B',
      blProp1: false
    },
  },
  propTree2:{
    strProp1: 'string',
    strProp2: 'string',
    strProp3: 'string',
    nProp1: 1,
    dProp1: new Date()
  }
}

// copy object to be a type
type LongObjectWitLotProps = typeof longObjectWitLotProps
// reffer to part of the larger type
type PropTree2 = LongObjectWitLotProps['propTree2']

function getPropTree2(data:LongObjectWitLotProps):PropTree2{
  return data['propTree2']
}

function newPropTree2(partial:PropTree2, data:unknown):void{
  if (typeof data == 'object'
    && data!=null){
    data = {
      ...data,
      partial
    }
  }
}

// get tree 2
const tree2 = getPropTree2(longObjectWitLotProps)
// change something
tree2.strProp1="Changed"
// updated
newPropTree2(tree2,longObjectWitLotProps)
