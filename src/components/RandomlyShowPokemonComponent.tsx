import * as React from 'react';
import { css } from 'emotion';
import { Button, Dimmer, Label, Loader } from 'semantic-ui-react';

import toColor from '../utils/pokemonTypeToColor';
import { Pokemon } from '../api/models/pokemon';
import bgGrass from '../assets/images/bg_grass.jpg';
import { HeaderComponent } from './HeaderComponent';

export interface RandomlyShowPokemonProps {
  pokemon?: Pokemon;
  isLoading: boolean;
  fetchPokemonLoad: () => void;
}

const pageStyle = css({
  paddingTop: '24px',
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});

const wrapperStyle = css({
  width: '80%',
  maxWidth: 500,
  minWidth: 350,
  margin: '0 auto',
  backgroundImage: `url(${bgGrass})`,
  backgroundSize: 'cover',
  height: 500,
  borderRadius: '10px',
  marginBottom: '20px',
  marginTop: '20px',
});

const pokemonShowStyle = css({
  color: '#263238',
  paddingTop: 160,
});

const pokemonAppearanceStyle = css({
  width: '200px',
  height: '200px',
});

const pokemonNameStyle = css({
  color: 'white',
  fontSize: '32px',
  fontWeight: 'bold',
});

export const RandomlyShowPokemonComponent: React.FC<
  RandomlyShowPokemonProps
> = ({
  pokemon = undefined,
  isLoading = false,
  fetchPokemonLoad = () => {},
}) => {
  return (
    <div className={pageStyle}>
      <HeaderComponent />
      <div className={wrapperStyle}>
        {isLoading ? (
          <Dimmer active>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        ) : (
          <div className={pokemonShowStyle}>
            {pokemon ? (
              <>
                <img
                  src={pokemon.sprites.front_default}
                  className={pokemonAppearanceStyle}
                  alt={pokemon.name}
                />
                <p className={pokemonNameStyle}>{pokemon.name}</p>
                {pokemon.types.map(item => (
                  <Label key={item.slot} color={toColor(item.type.name)}>
                    {item.type.name}
                  </Label>
                ))}
              </>
            ) : (
              undefined
            )}
          </div>
        )}
      </div>
      <Button color="red" onClick={fetchPokemonLoad}>
        Click to Appear!
      </Button>
    </div>
  );
};
