class DataInteliggent {

  constructor(
    public day: number = new Date().getDay(), 
    public month: number = new Date().getMonth(), 
    public year: number = new Date().getFullYear()
  ) {

  } 
}

const _happyBirthday = new DataInteliggent(2,2)

_happyBirthday.day = 2020

console.log(_happyBirthday);
