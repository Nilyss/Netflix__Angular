export class Movie {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | {}
  budget: number
  genres: [{}]
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: [{}]
  production_countries: [{}]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: [{}]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number

  constructor(
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | {},
    budget: number,
    genres: [{}],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: [{}],
    production_countries: [{}],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: [{}],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  ) {
    this.adult = adult
    this.backdrop_path = backdrop_path
    this.belongs_to_collection = belongs_to_collection
    this.budget = budget
    this.genres = genres
    this.homepage = homepage
    this.id = id
    this.imdb_id = imdb_id
    this.original_language = original_language
    this.original_title = original_title
    this.overview = overview
    this.popularity = popularity
    this.poster_path = poster_path
    this.production_companies = production_companies
    this.production_countries = production_countries
    this.release_date = release_date
    this.revenue = revenue
    this.runtime = runtime
    this.spoken_languages = spoken_languages
    this.status = status
    this.tagline = tagline
    this.title = title
    this.video = video
    this.vote_average = vote_average
    this.vote_count = vote_count
  }
}
