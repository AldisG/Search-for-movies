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
  rating: string,
  webChannel: string,
  dvdCountry: string,
  image: {
    medium: string,
    original: string
  },
  summary: string,
}

export type SearchMovieList = {
  score: number,
  show: MovieListType
}
export type FillerImage = {
  resolutions: {
    medium: {
      url: string
    },
    original: {
      url: string
    }
  }
}

export { }