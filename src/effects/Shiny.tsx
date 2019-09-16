import * as React from 'react';
import Classnames from 'classnames';
import { css, keyframes } from 'emotion';
import Star from '../assets/images/star.svg';

const baseStyle = css({
  width: 300,
  display: 'inline-block',
  position: 'absolute',
  top: '20%',
  left: '30%',
  textAlign: 'center',
  zIndex: 100,
});

const hiddenStyle = css({
  display: 'none',
});

const loaderStyle = css({
  position: 'relative',
  width: 60,
  height: 60,
  borderRadius: '50%',
  margin: 75,
  display: 'inline-flex',
  verticalAlign: 'middle',
});

const starsPulse = keyframes(`
  0% {
    display: none;
  },
  100% {
    transform: scale(1);
    opacity: 1;
  }
  80% {
    transform: scale(0);
    opacity: 0;
  }
`);

const starStyles = [
  css({
    animation: `${starsPulse} 1s ease-in-out 1`,
    left: 10,
  }),
  css({
    animation: `${starsPulse} 1s 0.2s ease-in-out 1`,
    left: 40,
  }),
  css({
    animation: `${starsPulse} 1s 0.4s ease-in-out 1`,
    left: 70,
  }),
];

export const ShinyEffect = () => {
  const [visibility, setVisibility] = React.useState(true);
  const handleSetVisibility = React.useCallback(() => {
    setTimeout(() => setVisibility(false), 500);
  }, []);

  return (
    <section className={baseStyle}>
      <div className={loaderStyle}>
        {[...Array(3)].map((_, i) => (
          <img
            className={Classnames(starStyles[i], !visibility && hiddenStyle)}
            src={Star}
            alt="star"
            onAnimationEnd={handleSetVisibility}
          />
        ))}
        ,
      </div>
    </section>
  );
};
