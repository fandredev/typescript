function echoValue<T>(args: Array<T>) : void {
  args.forEach(elem => console.log(elem))
}

echoValue([1,2,3]) // Inferencia de tipos
echoValue<string>(['1','2'])
echoValue<number>([1,2])
echoValue<{ name: string, age: number }>([{
  age: 30,
  name: 'Carlos'
}])

interface Int {
  name: string,
  age: number
}

echoValue<Int>([{
  age: 50,
  name: 'Jair'
}])
