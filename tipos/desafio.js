"use strict";
var funcionario = {
    supervisores: ['Pedro', 'José'],
    baterPonto: function (hora) { return hora <= 8 ? 'Ponto normal' : 'Fora do Horário'; }
};
var funcionario2 = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else
            return 'Fora ho horário';
    }
};
// funcionario = {}
// funcionario2 = {}
console.log(funcionario.baterPonto(9));
console.log(funcionario.supervisores);
console.log(funcionario2.supervisores);
console.log(funcionario.baterPonto(10));
