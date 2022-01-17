export type MovieListType = {
  id: number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  runtime: string,
  averageRuntime: {
    average: number
  },
  premiered: string,
  ended: string,
  officialSite: string,
  // schedule: string, 
  rating: string,
  // network: object, 
  webChannel: string,
  dvdCountry: string,
  image: {
    medium: string,
    original: string
  },
  summary: string,
  // _links: string
}
export { }