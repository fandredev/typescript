
type Dog = <T>(dog: T) => T

function callDog<T>(dog: T) : T{
  return dog
}

const callEcho: Dog = callDog


console.log(callEcho<string>('Mickey'));
