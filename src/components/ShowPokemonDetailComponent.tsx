import * as React from 'react';
import { css } from 'emotion';

import { Pokemon } from '../api/models/pokemon';
import { HeaderComponent } from './HeaderComponent';

interface ShowPokemonDetailProps {
  pokemon: Pokemon;
}

const pageStyle = css({
  paddingTop: '24px',
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});

const wrapperStyle = css({
  color: 'white',
});

const ShowPokemonDetailComponent: React.FC<ShowPokemonDetailProps> = ({
  pokemon,
}) => {
  return (
    <div className={pageStyle}>
      <HeaderComponent />
      <div className={wrapperStyle}>
        <h1>{pokemon.name}</h1>
      </div>
    </div>
  );
};

export default ShowPokemonDetailComponent;
