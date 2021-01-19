type Type = [string, boolean, number]

const tuple: Type = ['Olá', true, 14]

function tupleParam(a: string, b: boolean, c: number) : void {
  console.log(`${a}-${b}-${c}`)
}

tupleParam(...tuple)

function tupleArgs(...args: Type) : void {
  console.log(`${args[0]}-${args[1]}-${args[2]}`)
}


tupleArgs(...tuple)