class Company {
  private _boss: string 

  set boss(value: string) {
    if(value) {
      this._boss = value
    }
  }
}

const company = new Company()
company.boss = 'Cristiana'

console.log(company)