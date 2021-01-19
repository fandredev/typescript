// Array

type Features = [string, number]

const features: Features = ['Moto Zetec 1.8', 2020]

const [motor, ano] = features

console.log(`${motor}-${ano}`);

// Objeto

type Items = { name: string, price: number, features?: { import: boolean } }


const items: Items = Object.freeze({
  name: 'Black Label',
  price: 200,
})

const { name: n, price} = items

console.log(`${n}-${price}`)