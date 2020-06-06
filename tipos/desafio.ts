let funcionario: any = {
    supervisores: ['Pedro','José'],
    baterPonto: (hora: number) : string => hora <= 8 ? 'Ponto normal' : 'Fora do Horário'
}

let funcionario2: {
    supervisores: string[],
    baterPonto: (horas:number) => string
} = {
    supervisores: ['Ana','Pedro'],
    baterPonto(horario: number): string {
        if(horario <=8){
            return 'Ponto normal'
        } 
         else return 'Fora ho horário'
    }
}

// funcionario = {}
// funcionario2 = {}

console.log(funcionario.baterPonto(9))
console.log(funcionario.supervisores)
console.log(funcionario2.supervisores)
console.log(funcionario.baterPonto(10))