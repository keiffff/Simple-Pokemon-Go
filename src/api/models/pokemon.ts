export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: { name: string; url: string };
}

export interface VersionGameIndex {
  game_index: string;
  version: { name: string; url: string };
}

export interface PokemonHeldItemVersion {
  version: { name: string; url: string };
  rarity: number;
}

export interface PokemonHeldItem {
  item: { name: string; url: string };
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: { name: string; url: string };
  version_group: { name: string; url: string };
  level_learned_at: number;
}

export interface PokemonMove {
  move: { name: string; url: string };
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonStat {
  stat: { name: string; url: string };
  effort: number;
  base_stat: number;
}

export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: { name: string; url: string }[];
  game_indices: VersionGameIndex[];
  held_item: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: { name: string; url: string };
  stats: PokemonStat[];
  types: PokemonType[];
}
