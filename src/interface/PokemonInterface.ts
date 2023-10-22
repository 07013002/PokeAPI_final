export interface PokemonInterface{
  count: number,
    results: {
      name: string,
      url: string
    }[]
}
export interface PokemonInterfaceR{
  name: string,
  url: string
}
export  interface PokemonData {
  id: number,
  name: string,
  sprites: {
    front_default: string
  }
}