export const typeToColor = (type: string) => {
  switch (type) {
    case 'normal':
      return undefined;
    case 'fighting':
      return 'red';
    case 'flying':
      return 'teal';
    case 'poison':
      return 'purple';
    case 'ground':
      return 'brown';
    case 'rock':
      return 'brown';
    case 'bug':
      return 'olive';
    case 'ghost':
      return 'violet';
    case 'steel':
      return 'grey';
    case 'fire':
      return 'orange';
    case 'water':
      return 'blue';
    case 'grass':
      return 'green';
    case 'electric':
      return 'yellow';
    case 'psychic':
      return 'pink';
    case 'ice':
      return 'teal';
    case 'dragon':
      return 'violet';
    case 'dark':
      return 'black';
    case 'fairy':
      return 'pink';
  }
};
