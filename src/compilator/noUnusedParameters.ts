function noUsedParameters(param: string) : number {
  return 2
}

/**
 *  Irá ocorrer um erro no compilador caso a opção strictNullChecks esteja habilitada
    no tsconfig.json, pois o parâmetro 'param'não está sendo utilizado
*/
