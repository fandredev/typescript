export class Data {

  // Público
  public day: number
  month: number
  year: number

  constructor(
    day: number = new Date().getDay(),
    month: number = new Date().getMonth(),
    year: number = new Date().getFullYear()
  ) {
    this.day = day
    this.month = month
    this.year = year
  }
}

const happyBirthday = new Data(2,2)

happyBirthday.day = 2020

console.log(happyBirthday);
