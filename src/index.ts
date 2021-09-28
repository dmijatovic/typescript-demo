
import Queue, {addFullName} from './generics'

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


const john = addFullName({
  firstName: 'John',
  lastName: 'Doe',
  email: 'j.d@dot.com'
})

console.log(john.fullName)

