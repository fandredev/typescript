const salutation = () => console.log('Olá');
salutation()

const talkPeople = (people: string) => console.log(`${people}`);
talkPeople('Cristiana')

// Uso do this

function normalWithThis(){
  console.log(this)
}

const whatIsThis = normalWithThis.bind('Felipe')

normalWithThis()
whatIsThis()