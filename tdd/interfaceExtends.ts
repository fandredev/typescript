namespace Peopless {
    interface PersonalData {
        name: string,
        readonly cpf: number,
        readonly rg: number,
        data: number,
        signo: string
    }
    interface Filiation extends PersonalData {
        readonly mother: string,
        readonly father: string
    }
    interface Online extends Filiation {
        email?: string,
        readonly password?: string | number
    }
    interface Address extends Online {
        cep: number,
        address: any,
        number?: number,
        neighborhood: string,
        city: string,
        uf: string
    }
    interface Phones extends Address {
        phone?: number,
        cel?: number
    }
    interface PhysicalCharacteristics extends Phones {
        height: number,
        weight: number,
        readonly type_blood: string
    }
    enum OtherInformations {
        age = 18
    }
    interface All extends PhysicalCharacteristics {
        favorite_color: string,
        age: number,
    }
    const data: All =
    {
        name: 'Vinicius Vitor Fábio Carvalho',
        cpf: 604.13356302,
        rg: 197834954,
        data: 18121968,
        signo: 'Sagitário',
        mother: 'Jennifer Isis',
        father: 'Nicolas Bruno Kaique Carvalho',
        email: 'viniciusvitorfabiocarvalho__viniciusvitorfabiocarvalho@maptec.com.br',
        password: '9pGdyfxZJI',
        cep: 85905040,
        address: 'Rua Barão do Rio Branco',
        number: 567,
        neighborhood: 'Centro',
        city: 'Toledo',
        uf: 'PR',
        phone: 4528774294,
        cel: 45999005791,
        height: 1.84,
        weight: 104,
        type_blood: 'O+',
        favorite_color: 'amarelo',
        age: OtherInformations.age
    }

    function allData<Object>(props: Object): any {
        console.log(props)
    }


    allData(data)
}


