let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(canal)

// let nome = 'Pedro'
let _nome = 'Pedro'
console.log(`Nome ${nome}`)


function soma(a: any,b: any): any{
    return a + b
}
let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
    // let a = 1   
    let saudacao: string
    if(isManha){
        saudacao ='Bom dia'
    }else{
        saudacao ='tenha uma boa vida'
    }
    return saudacao
}