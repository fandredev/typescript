class Phones {
  constructor(private _phone: string = 'Motorola'){}

  get phone() : string {
    return this._phone
  }

  set phone(value: string) {
    this._phone = value
  }
}


const newPeople = new Phones()
newPeople.phone = 'iphone 10'
console.log(newPeople.phone);
