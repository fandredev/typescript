interface Human {
  eyes_colors: Array<string>
  age: number,
  has_job: boolean
}

class _Client implements Human {
  eyes_colors: string[];
  age: number;
  has_job: boolean;

  // Atributo novo
  have_son: boolean = false
}

const myCli = new _Client

myCli.age = 20
myCli.has_job = true
myCli.eyes_colors = ['Azul', 'Verde']

console.log(myCli);
console.log(myCli.have_son);
