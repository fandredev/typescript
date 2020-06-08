
namespace Examples {
  interface Vehicles {
    brand: string,
    model: string | number,
    year: number,
    readonly renavam?: number,
    readonly plate?: string,
    color?: string,
    people: Array<Object> | Array<string> | Array<number>
  }
  export function generateVehicle(props: Vehicles): void {
    let newBrand: string = props.brand
    newBrand = 'Saab'.toUpperCase()
    let newModel: string | number = props.model
    newModel = '9000 CD 2.3 Turbo'.toUpperCase()
    let newYear: number = props.year
    newYear.toPrecision(4)

    props.people.forEach((props: any) => {
      const response: number | string = [
        newBrand, newModel, newYear, props.renavam, props.name, props.age, props.plate
      ].join(' | ')
      console.log(response)
    })
  }

  export namespace Account {
    interface AccountInt {
      readonly cc: string | number,
      readonly agency: number,
      bank_name: string,
      readonly bank_code: number,
      address: Array<Object>
      state?: string
    }
    export function generateAccounts(props: AccountInt): void {
      let myAccount = Object.create(null)
      myAccount = props
      myAccount.address.map((p: any) => {
        p.number = 15
      })
      console.log(myAccount)
    }
  }
}
Examples.generateVehicle({
  brand: 'Matra',
  model: 'Pick-Up CD 4x4 Curto/Longo 2.5 TDI Dies.',
  year: 2003,
  renavam: 99479051835,
  plate: 'AKF-0083',
  color: 'green',
  people: [
    {
      name: 'Rodrigo',
      age: 31
    }
  ]
})
Examples.Account.generateAccounts({
  cc: '0032562-7',
  agency: 5566,
  bank_name: 'Bradesco',
  bank_code: 237,
  address: [
    {
      neighborhood: 'Jaguaré',
      street: 'Rua dos bancos',
      number: Math.random().toFixed(2)
    }
  ]
})