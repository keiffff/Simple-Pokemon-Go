import * as React from 'react';
import { css } from 'emotion';
import { Button, Dimmer, Label, Loader } from 'semantic-ui-react';

import toColor from '../utils/pokemonTypeToColor';
import { Pokemon } from '../api/models/pokemon';
import bgGrass from '../assets/images/bg_grass.jpg';
import { HeaderComponent } from './HeaderComponent';
import { ShinyEffect } from '../effects/Shiny';

export interface RandomlyShowPokemonProps {
  pokemon?: Pokemon;
  isLoading: boolean;
  fetchPokemonLoad: () => void;
  isShiny?: boolean;
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
  position: 'relative',
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

const buttonWrapperStyle = css({
  display: 'block',
  marginTop: 8,
});

const buttonStyle = css({
  width: 200,
});

export const RandomlyShowPokemonComponent = ({
  pokemon = undefined,
  isLoading = false,
  fetchPokemonLoad = () => {},
  isShiny = false,
}: RandomlyShowPokemonProps) => {
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
                {isShiny ? <ShinyEffect /> : null}
                <img
                  src={
                    isShiny
                      ? pokemon.sprites.front_shiny
                      : pokemon.sprites.front_default
                  }
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
            ) : null}
          </div>
        )}
      </div>
      <div className={buttonWrapperStyle}>
        <Button
          className={buttonStyle}
          color="red"
          onClick={fetchPokemonLoad}
          disabled={isLoading}
        >
          Click to Appear!
        </Button>
      </div>
      <div className={buttonWrapperStyle}>
        <Button className={buttonStyle} color="green" disabled={isLoading}>
          Use Pokeball!
        </Button>
      </div>
    </div>
  );
};
