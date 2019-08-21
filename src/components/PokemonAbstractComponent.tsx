import * as React from 'react';
import {css} from 'emotion';
import {Label} from 'semantic-ui-react';
import {typeToColor} from '../utils/typeToColor';

type Props = {
  name: string;
  appearance?: string;
  types: string[];
};

const pokemonShowStyle = css({
  color: '#263238',
});

const pokemonAppearanceStyle = css({
  width: '200px',
  height: '200px',
});

const pokemonNameStyle = css({
  fontSize: '24px',
});

export const PokemonAbstractComponent = (props: Props) => (
  <div className={pokemonShowStyle}>
    {props.appearance ? (
      <img
        src={props.appearance}
        className={pokemonAppearanceStyle}
        alt={props.name}
      />
    ) : (
      undefined
    )}
    <p className={pokemonNameStyle}>{props.name}</p>
    {props.types.map(type => (
      <Label key={type} color={typeToColor(type)}>
        {type}
      </Label>
    ))}
  </div>
);
