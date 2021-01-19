let height = 12
// height = null // O valor precisa ser obrigatóriamente

let heightOptional: number | null = 12
console.log(heightOptional);


type Contact = {
  name: string,
  phone: string,
  phone2: string | null
}

const contact: Contact = Object.freeze({
  name: 'Júlia',
  phone: '1928129210',
  phone2: null
})
console.log(contact);
console.log(contact.name);
console.log(contact.phone2);

let canBeNull = null // any
