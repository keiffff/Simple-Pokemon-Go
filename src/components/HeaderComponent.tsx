import * as React from 'react';
import {css, keyframes} from 'emotion';
import logo from '../assets/images/logo.svg';

const headerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
});

const logoSpin = keyframes(`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`);

const logoStyle = css({
  animation: `${logoSpin} infinite 20s linear`,
  height: '15vmin',
  pointerEvents: 'none',
});

export const HeaderComponent: React.FC = () => (
  <header className={headerStyle}>
    <img src={logo} className={logoStyle} alt="logo" />
  </header>
);
