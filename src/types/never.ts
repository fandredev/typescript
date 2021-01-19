function fail(msg: string) : never { 
  throw new Error(msg)
}

type Product = {
  name: string,
  price: number,
  validProduct: () => void
}

const product: Product = {
  name: 'Sabão em Pó',
  price: 10.21,
  validProduct(){
    if(!this.name || this.name.trim().length === 0) {
      fail('Must be a name')
    }
    if(this.price <= 0) {
      fail('invalid price')
    }
  }
}

const { validProduct } = product

validProduct()