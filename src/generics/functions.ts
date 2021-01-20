// Com generics

function echoUpgrade<T>(object: T): T {
  return object
}

console.log(echoUpgrade<string>('Joao').length);
console.log(echoUpgrade<number>(13));
console.log(echoUpgrade({}));
