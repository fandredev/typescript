export let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)


hobbies = [100] // Erro porque o array de hobbies foi inferido para o tipo any
console.log(hobbies);
