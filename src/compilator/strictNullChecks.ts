function salute(morning: boolean) : string {
  let salute: string
  if(morning) salute = 'Bom dia'
  
  return salute // Irá dar erro, pois possívelmente poderá retornar null se StrictNullChecks for true
}

// StrictNullChecks tira a ausencia de recber valores nulos