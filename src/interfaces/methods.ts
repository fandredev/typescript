namespace PlataformsStream {
  export interface Plat {
    name: string
    status?: boolean,
    [stars: number] : number,
    getStatus() : boolean,
    getName(name: string) : string,
    getStars?(): number
  }

  export function returnNamePlatform({ name }: Plat) : string {
    return `Plataform: ${name}`
  }
}

const plat: PlataformsStream.Plat = {
  name: 'Youtube',
  status: true,
  getStatus() {
    return this.status
  },
  getName(name: string) : string {
    return `Olá, meu nome é: ${name}.`
  }
}

console.log(PlataformsStream.returnNamePlatform(plat));
console.log(plat.getName('Felipe'));
console.log(plat.getStatus());
