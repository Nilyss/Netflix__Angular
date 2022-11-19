export class Person {
  birthday: string | null
  known_for_department: string
  deathday: null | string
  id: number
  name: string
  also_known_as: [string]
  gender: number
  biography: string
  popularity: number
  place_of_birth: string | null
  profile_path: string | null
  adult: boolean
  imdb_id: string
  homepage: null | string
  constructor(
    birthday: string | null,
    known_for_department: string,
    deathday: null | string,
    id: number,
    name: string,
    also_known_as: [string],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string | null,
    profile_path: string | null,
    adult: boolean,
    imdb_id: string,
    homepage: null | string
  ) {
    this.birthday = birthday
    this.known_for_department = known_for_department
    this.deathday = deathday
    this.id = id
    this.name = name
    this.also_known_as = also_known_as
    this.gender = gender
    this.biography = biography
    this.popularity = popularity
    this.place_of_birth = place_of_birth
    this.profile_path = profile_path
    this.adult = adult
    this.imdb_id = imdb_id
    this.homepage = homepage
  }
}
