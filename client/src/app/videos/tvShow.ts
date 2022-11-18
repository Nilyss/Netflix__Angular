export class TvShow {
  backdrop_path: string | null
  created_by: [{}]
  episode_run_time: [number]
  first_air_date: string
  genres: [{}]
  homepage: string
  id: number
  in_production: boolean
  languages: [string]
  last_air_date: string
  last_episode_to_air: {}
  name: string
  next_episode_to_air: {}
  networks: [{}]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: [string]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: [{}]
  production_countries: [{}]
  seasons: [{}]
  spoken_languages: [{}]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number

  constructor(
    backdrop_path: string | null,
    created_by: [{}],
    episode_run_time: [number],
    first_air_date: string,
    genres: [{}],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: [string],
    last_air_date: string,
    last_episode_to_air: {},
    name: string,
    next_episode_to_air: {},
    networks: [{}],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: [string],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string | null,
    production_companies: [{}],
    production_countries: [{}],
    seasons: [{}],
    spoken_languages: [{}],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
  ) {
    this.backdrop_path = backdrop_path
    this.created_by = created_by
    this.episode_run_time = episode_run_time
    this.first_air_date = first_air_date
    this.genres = genres
    this.homepage = homepage
    this.id = id
    this.in_production = in_production
    this.languages = languages
    this.last_air_date = last_air_date
    this.last_episode_to_air = last_episode_to_air
    this.name = name
    this.next_episode_to_air = next_episode_to_air
    this.networks = networks
    this.number_of_episodes = number_of_episodes
    this.number_of_seasons = number_of_seasons
    this.origin_country = origin_country
    this.original_language = original_language
    this.original_name = original_name
    this.overview = overview
    this.popularity = popularity
    this.poster_path = poster_path
    this.production_companies = production_companies
    this.production_countries = production_countries
    this.seasons = seasons
    this.spoken_languages = spoken_languages
    this.status = status
    this.tagline = tagline
    this.type = type
    this.vote_average = vote_average
    this.vote_count = vote_count
  }
}
