/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export enum CacheControlScope {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  CacheControlScope: true,
  Float: true,
  Int: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  Ability: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    effect: { __type: "String" },
    id: { __type: "Int" },
    is_hidden: { __type: "Boolean" },
    name: { __type: "String" },
    pokemon: { __type: "[Pokemon]" },
  },
  DexEntry: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    game: { __type: "Game" },
  },
  Dominant_Color: {
    __typename: { __type: "String!" },
    b: { __type: "Int" },
    dark: { __type: "String" },
    g: { __type: "Int" },
    light: { __type: "String" },
    original: { __type: "String" },
    r: { __type: "Int" },
  },
  EggGroup: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    name: { __type: "String" },
    pokemon: { __type: "[Pokemon]" },
  },
  EvolutionCriteria: {
    __typename: { __type: "String!" },
    $on: { __type: "$EvolutionCriteria!" },
  },
  Game: {
    __typename: { __type: "String!" },
    generation: { __type: "String" },
    id: { __type: "Int" },
    name: { __type: "String" },
    regions: { __type: "[Region]" },
  },
  Gender: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    name: { __type: "String" },
  },
  Item: {
    __typename: { __type: "String!" },
    bag_pocket: { __type: "String" },
    cost: { __type: "Int" },
    description: { __type: "String" },
    effect: { __type: "String" },
    id: { __type: "Int" },
    name: { __type: "String" },
    sprite: { __type: "String" },
  },
  Location: {
    __typename: { __type: "String!" },
    games: { __type: "[Game]" },
    id: { __type: "Int" },
    name: { __type: "String" },
    pokemon: { __type: "[Pokemon]" },
    region: { __type: "Region" },
  },
  Move: {
    __typename: { __type: "String!" },
    accuracy: { __type: "Int" },
    ailment: { __type: "String" },
    damage_class: { __type: "String" },
    description: { __type: "String" },
    effect: { __type: "String" },
    effect_chance: { __type: "Int" },
    id: { __type: "Int" },
    learn_methods: { __type: "[MoveLearnMethod]" },
    name: { __type: "String" },
    original_games: { __type: "[Game]" },
    power: { __type: "Int" },
    pp: { __type: "Int" },
    priority: { __type: "Int" },
    type: { __type: "Type" },
  },
  MoveDescription: {
    __typename: { __type: "String!" },
    description: { __type: "String" },
    games: { __type: "[Game]" },
  },
  MoveLearnMethod: {
    __typename: { __type: "String!" },
    games: { __type: "[Game]" },
    level_learned_at: { __type: "Int" },
    method: { __type: "String" },
  },
  NameAndId: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    name: { __type: "String" },
  },
  OtherEvolutionCriteria: {
    __typename: { __type: "String!" },
    evolution_criteria_name: { __type: "String" },
    value: { __type: "String" },
  },
  Pokemon: {
    __typename: { __type: "String!" },
    abilities: { __type: "[Ability]", __args: { game: "String" } },
    base_experience: { __type: "Int" },
    base_happiness: { __type: "Int" },
    base_stats: { __type: "Stats" },
    capture_rate: { __type: "Int" },
    color: { __type: "String" },
    dominant_color: { __type: "Dominant_Color" },
    egg_groups: { __type: "[EggGroup]" },
    evolution_chain_start: { __type: "Pokemon!" },
    evolution_criteria: {
      __type: "[EvolutionCriteria]",
      __args: { game: "String" },
    },
    evolution_trigger: { __type: "String" },
    evolves_from: { __type: "Pokemon" },
    evolves_to: { __type: "[Pokemon]" },
    games: { __type: "[Game]" },
    gender_rate: { __type: "Float" },
    generation: { __type: "String" },
    genus: { __type: "String" },
    growth_rate: { __type: "String" },
    hatch_counter: { __type: "Int" },
    height: { __type: "Int" },
    id: { __type: "Int" },
    is_baby: { __type: "Boolean" },
    is_default: { __type: "Boolean" },
    locations: { __type: "[Location]" },
    moves: { __type: "[Move]", __args: { game: "String!" } },
    name: { __type: "String" },
    nat_dex_num: { __type: "Int" },
    pokedex_entries: { __type: "[DexEntry]" },
    shape: { __type: "String" },
    sprites: { __type: "Sprites" },
    types: { __type: "[Type]" },
    variants: { __type: "[Pokemon]" },
    weight: { __type: "Int" },
  },
  Region: {
    __typename: { __type: "String!" },
    games: { __type: "[Game]" },
    id: { __type: "Int" },
    locations: { __type: "[Location]" },
    name: { __type: "String" },
  },
  Sprites: {
    __typename: { __type: "String!" },
    back_default: { __type: "String" },
    back_female: { __type: "String" },
    back_shiny: { __type: "String" },
    back_shiny_female: { __type: "String" },
    front_default: { __type: "String" },
    front_female: { __type: "String" },
    front_shiny: { __type: "String" },
    front_shiny_female: { __type: "String" },
  },
  Stats: {
    __typename: { __type: "String!" },
    attack: { __type: "Int" },
    defense: { __type: "Int" },
    hp: { __type: "Int" },
    special_attack: { __type: "Int" },
    special_defense: { __type: "Int" },
    speed: { __type: "Int" },
  },
  Type: {
    __typename: { __type: "String!" },
    double_damage_from: { __type: "[Type]" },
    double_damage_to: { __type: "[Type]" },
    half_damage_from: { __type: "[Type]" },
    half_damage_to: { __type: "[Type]" },
    id: { __type: "Int" },
    name: { __type: "String" },
    no_damage_from: { __type: "[Type]" },
    no_damage_to: { __type: "[Type]" },
    pokemon: { __type: "[Pokemon]" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    ability: { __type: "Ability", __args: { game: "String", id: "Int!" } },
    allAbilities: { __type: "[Ability]" },
    allEggGroups: { __type: "[EggGroup]" },
    allGames: { __type: "[Game]" },
    allItems: { __type: "[Item]" },
    allLocations: { __type: "[Location]" },
    allMoves: { __type: "[Move]" },
    allPokemon: {
      __type: "[Pokemon]",
      __args: { filter: "Boolean", limit: "Int" },
    },
    allRegions: { __type: "[Region]" },
    allTypes: { __type: "[Type]", __args: { end: "Int", start: "Int" } },
    eggGroup: { __type: "EggGroup", __args: { id: "Int!" } },
    game: { __type: "Game", __args: { id: "Int" } },
    item: { __type: "Item", __args: { id: "Int" } },
    location: { __type: "Location", __args: { id: "Int!" } },
    move: { __type: "Move", __args: { id: "Int!" } },
    pokemon: { __type: "Pokemon", __args: { id: "Int!" } },
    region: { __type: "Region", __args: { id: "Int!" } },
    type: { __type: "Type", __args: { id: "Int!" } },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    EvolutionCriteria: [
      "Gender",
      "Item",
      "Location",
      "Move",
      "OtherEvolutionCriteria",
      "Type",
    ],
  },
} as const;

export interface Ability {
  __typename?: "Ability";
  description?: Maybe<ScalarsEnums["String"]>;
  effect?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  is_hidden?: Maybe<ScalarsEnums["Boolean"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of Pokemon that can have the queried Ability
   */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
}

export interface DexEntry {
  __typename?: "DexEntry";
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * game/version the queried DexEntry is from
   */
  game?: Maybe<Game>;
}

export interface Dominant_Color {
  __typename?: "Dominant_Color";
  b?: Maybe<ScalarsEnums["Int"]>;
  dark?: Maybe<ScalarsEnums["String"]>;
  g?: Maybe<ScalarsEnums["Int"]>;
  light?: Maybe<ScalarsEnums["String"]>;
  original?: Maybe<ScalarsEnums["String"]>;
  r?: Maybe<ScalarsEnums["Int"]>;
}

export interface EggGroup {
  __typename?: "EggGroup";
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of Pokemon in the queried egg group
   */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
}

/**
 * EvolutionCriteria can be one or more of several possible different types
 */
export interface EvolutionCriteria {
  __typename?:
    | "Gender"
    | "Item"
    | "Location"
    | "Move"
    | "OtherEvolutionCriteria"
    | "Type";
  $on: $EvolutionCriteria;
}

export interface Game {
  __typename?: "Game";
  generation?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of Regions that are found in the queried Game
   */
  regions?: Maybe<Array<Maybe<Region>>>;
}

export interface Gender {
  __typename?: "Gender";
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface Item {
  __typename?: "Item";
  bag_pocket?: Maybe<ScalarsEnums["String"]>;
  cost?: Maybe<ScalarsEnums["Int"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * Use in an evolution_criteria query; returns the name of the evolution criteria that must have been met for the Pokémon to have evolved
   */
  effect?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  sprite?: Maybe<ScalarsEnums["String"]>;
}

export interface Location {
  __typename?: "Location";
  /**
   * array of games/versions in which pokemon are found at the queried Location
   */
  games?: Maybe<Array<Maybe<Game>>>;
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of Pokemon that can be found at the queried Location
   */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
  region?: Maybe<Region>;
}

export interface Move {
  __typename?: "Move";
  accuracy?: Maybe<ScalarsEnums["Int"]>;
  ailment?: Maybe<ScalarsEnums["String"]>;
  /**
   * physical or special
   */
  damage_class?: Maybe<ScalarsEnums["String"]>;
  description?: Maybe<ScalarsEnums["String"]>;
  /**
   * possible status condition effect
   */
  effect?: Maybe<ScalarsEnums["String"]>;
  effect_chance?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  /**
   * level, egg, move tutor, tm/hm
   */
  learn_methods?: Maybe<Array<Maybe<MoveLearnMethod>>>;
  name?: Maybe<ScalarsEnums["String"]>;
  original_games?: Maybe<Array<Maybe<Game>>>;
  power?: Maybe<ScalarsEnums["Int"]>;
  pp?: Maybe<ScalarsEnums["Int"]>;
  priority?: Maybe<ScalarsEnums["Int"]>;
  type?: Maybe<Type>;
}

export interface MoveDescription {
  __typename?: "MoveDescription";
  description?: Maybe<ScalarsEnums["String"]>;
  games?: Maybe<Array<Maybe<Game>>>;
}

export interface MoveLearnMethod {
  __typename?: "MoveLearnMethod";
  games?: Maybe<Array<Maybe<Game>>>;
  level_learned_at?: Maybe<ScalarsEnums["Int"]>;
  /**
   * how the Pokemon learns the queried Move
   */
  method?: Maybe<ScalarsEnums["String"]>;
}

export interface NameAndId {
  __typename?: "NameAndId";
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface OtherEvolutionCriteria {
  __typename?: "OtherEvolutionCriteria";
  /**
   * example response: time_of_day
   */
  evolution_criteria_name?: Maybe<ScalarsEnums["String"]>;
  /**
   * example response: night
   */
  value?: Maybe<ScalarsEnums["String"]>;
}

/**
 * query for an individual Pokemon's info
 */
export interface Pokemon {
  __typename?: "Pokemon";
  /**
   * array of Abilities that the queried Pokemon can have
   */
  abilities: (args?: {
    game?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<ScalarsEnums["Int"]>;
  base_happiness?: Maybe<ScalarsEnums["Int"]>;
  /**
   * base stats of the queried Pokemon
   */
  base_stats?: Maybe<Stats>;
  /**
   * capture rate of the queried Pokemon when using a normal Pokeball at full health
   */
  capture_rate?: Maybe<ScalarsEnums["Int"]>;
  /**
   * basic color of the queried Pokemon
   */
  color?: Maybe<ScalarsEnums["String"]>;
  /**
   * dominant color of the queried Pokemon's image
   */
  dominant_color?: Maybe<Dominant_Color>;
  /**
   * array of the different EggGroups that the queried Pokemon belongs to
   */
  egg_groups?: Maybe<Array<Maybe<EggGroup>>>;
  /**
   * the Pokemon at the 'beginning' of the queried Pokemon's evolution chain (i.e. Charmander, even if you requested Charizard)
   */
  evolution_chain_start: Pokemon;
  /**
   * array of all criteria that must be met for the queried Pokemon to evolve
   */
  evolution_criteria: (args?: {
    game?: Maybe<Scalars["String"]>;
  }) => Maybe<Array<Maybe<EvolutionCriteria>>>;
  /**
   * what triggers the queried Pokemon to evolve if all evolution criteria have been met
   */
  evolution_trigger?: Maybe<ScalarsEnums["String"]>;
  /**
   * Pokemon that the queried Pokemon evolves from
   */
  evolves_from?: Maybe<Pokemon>;
  /**
   * array of Pokemon that the queried Pokemon can evolve into
   */
  evolves_to?: Maybe<Array<Maybe<Pokemon>>>;
  /**
   * array of Games that the queried Pokemon is found in
   */
  games?: Maybe<Array<Maybe<Game>>>;
  /**
   * percent chance of the queried Pokémon being female (-1 for genderless)
   */
  gender_rate?: Maybe<ScalarsEnums["Float"]>;
  /**
   * which generation the queried Pokemon debuted in
   */
  generation?: Maybe<ScalarsEnums["String"]>;
  genus?: Maybe<ScalarsEnums["String"]>;
  growth_rate?: Maybe<ScalarsEnums["String"]>;
  hatch_counter?: Maybe<ScalarsEnums["Int"]>;
  /**
   * height in meters
   */
  height?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["Int"]>;
  is_baby?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * true if it's the default form, false if it's a variant (i.e. alola, galar, mega, etc)
   */
  is_default?: Maybe<ScalarsEnums["Boolean"]>;
  /**
   * array of Locations that the queried Pokemon can be found in
   */
  locations?: Maybe<Array<Maybe<Location>>>;
  /**
   * array of Move objects
   */
  moves: (args: { game: Scalars["String"] }) => Maybe<Array<Maybe<Move>>>;
  name?: Maybe<ScalarsEnums["String"]>;
  nat_dex_num?: Maybe<ScalarsEnums["Int"]>;
  /**
   * array of DexEntry objects
   */
  pokedex_entries?: Maybe<Array<Maybe<DexEntry>>>;
  shape?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of Sprite objects
   */
  sprites?: Maybe<Sprites>;
  /**
   * array of all the different Types of the queried Pokemon
   */
  types?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of different variant forms of the queried Pokemon
   */
  variants?: Maybe<Array<Maybe<Pokemon>>>;
  /**
   * weight in kilograms
   */
  weight?: Maybe<ScalarsEnums["Int"]>;
}

export interface Region {
  __typename?: "Region";
  /**
   * array of Games the queried Region is found in
   */
  games?: Maybe<Array<Maybe<Game>>>;
  id?: Maybe<ScalarsEnums["Int"]>;
  /**
   * array of Locations that are in the queried Region
   */
  locations?: Maybe<Array<Maybe<Location>>>;
  name?: Maybe<ScalarsEnums["String"]>;
}

export interface Sprites {
  __typename?: "Sprites";
  back_default?: Maybe<ScalarsEnums["String"]>;
  back_female?: Maybe<ScalarsEnums["String"]>;
  back_shiny?: Maybe<ScalarsEnums["String"]>;
  back_shiny_female?: Maybe<ScalarsEnums["String"]>;
  front_default?: Maybe<ScalarsEnums["String"]>;
  front_female?: Maybe<ScalarsEnums["String"]>;
  front_shiny?: Maybe<ScalarsEnums["String"]>;
  front_shiny_female?: Maybe<ScalarsEnums["String"]>;
}

export interface Stats {
  __typename?: "Stats";
  attack?: Maybe<ScalarsEnums["Int"]>;
  defense?: Maybe<ScalarsEnums["Int"]>;
  hp?: Maybe<ScalarsEnums["Int"]>;
  special_attack?: Maybe<ScalarsEnums["Int"]>;
  special_defense?: Maybe<ScalarsEnums["Int"]>;
  speed?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * Pokemon type (i.e. Grass, Electric, Water, etc)
 */
export interface Type {
  __typename?: "Type";
  /**
   * array of super effective Types that the queried type receives double damage from
   */
  double_damage_from?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of Types the queried type inflicts double damage upon
   */
  double_damage_to?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of not very effective Types the queried type receives half damage from
   */
  half_damage_from?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of Types the queried type inflicts double damage upon
   */
  half_damage_to?: Maybe<Array<Maybe<Type>>>;
  id?: Maybe<ScalarsEnums["Int"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * array of ineffective Types the queried type receives no damage from
   */
  no_damage_from?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of Types the queried type inflicts no damage upon
   */
  no_damage_to?: Maybe<Array<Maybe<Type>>>;
  /**
   * array of Pokemon that have the queried Type
   */
  pokemon?: Maybe<Array<Maybe<Pokemon>>>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  ability: (args: {
    game?: Maybe<Scalars["String"]>;
    id: Scalars["Int"];
  }) => Maybe<Ability>;
  allAbilities?: Maybe<Array<Maybe<Ability>>>;
  allEggGroups?: Maybe<Array<Maybe<EggGroup>>>;
  allGames?: Maybe<Array<Maybe<Game>>>;
  allItems?: Maybe<Array<Maybe<Item>>>;
  allLocations?: Maybe<Array<Maybe<Location>>>;
  allMoves?: Maybe<Array<Maybe<Move>>>;
  /**
   * get range of Pokemon starting from start variable
   */
  allPokemon: (args?: {
    filter?: Maybe<Scalars["Boolean"]>;
    limit?: Maybe<Scalars["Int"]>;
  }) => Maybe<Array<Maybe<Pokemon>>>;
  allRegions?: Maybe<Array<Maybe<Region>>>;
  allTypes: (args?: {
    end?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
  }) => Maybe<Array<Maybe<Type>>>;
  eggGroup: (args: { id: Scalars["Int"] }) => Maybe<EggGroup>;
  game: (args?: { id?: Maybe<Scalars["Int"]> }) => Maybe<Game>;
  item: (args?: { id?: Maybe<Scalars["Int"]> }) => Maybe<Item>;
  location: (args: { id: Scalars["Int"] }) => Maybe<Location>;
  move: (args: { id: Scalars["Int"] }) => Maybe<Move>;
  pokemon: (args: { id: Scalars["Int"] }) => Maybe<Pokemon>;
  region: (args: { id: Scalars["Int"] }) => Maybe<Region>;
  type: (args: { id: Scalars["Int"] }) => Maybe<Type>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Ability: Ability;
  DexEntry: DexEntry;
  Dominant_Color: Dominant_Color;
  EggGroup: EggGroup;
  Game: Game;
  Gender: Gender;
  Item: Item;
  Location: Location;
  Move: Move;
  MoveDescription: MoveDescription;
  MoveLearnMethod: MoveLearnMethod;
  Mutation: Mutation;
  NameAndId: NameAndId;
  OtherEvolutionCriteria: OtherEvolutionCriteria;
  Pokemon: Pokemon;
  Query: Query;
  Region: Region;
  Sprites: Sprites;
  Stats: Stats;
  Subscription: Subscription;
  Type: Type;
}
export type SchemaObjectTypesNames =
  | "Ability"
  | "DexEntry"
  | "Dominant_Color"
  | "EggGroup"
  | "Game"
  | "Gender"
  | "Item"
  | "Location"
  | "Move"
  | "MoveDescription"
  | "MoveLearnMethod"
  | "Mutation"
  | "NameAndId"
  | "OtherEvolutionCriteria"
  | "Pokemon"
  | "Query"
  | "Region"
  | "Sprites"
  | "Stats"
  | "Subscription"
  | "Type";

export interface $EvolutionCriteria {
  Gender?: Gender;
  Item?: Item;
  Location?: Location;
  Move?: Move;
  OtherEvolutionCriteria?: OtherEvolutionCriteria;
  Type?: Type;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CacheControlScope: CacheControlScope | undefined;
}
