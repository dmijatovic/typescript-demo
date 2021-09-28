// overloading ensures better return types
// when multiple return types are possible
function reverse(value: string):string;
function reverse(value: string[]):string[];
function reverse(value: string | string[]){
  if (typeof value == 'string'){
    return value.split('').reverse().join()
  }else{
    return value.slice().reverse()
  }
}


const hello=reverse('hello')
const arrHello= reverse(['h','e','l','l','o'])