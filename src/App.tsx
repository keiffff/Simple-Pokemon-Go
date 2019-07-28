import React from 'react';
import logo from './logo.svg';
import {css, keyframes} from 'emotion';

const indexPageStyle = css({
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});

const headerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
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
  height: '20vmin',
  pointerEvents: 'none',
});

const App: React.FC = () => {
  return (
    <div className={indexPageStyle}>
      <header className={headerStyle}>
        <img src={logo} className={logoStyle} alt="logo" />
      </header>
    </div>
  );
};

export default App;
