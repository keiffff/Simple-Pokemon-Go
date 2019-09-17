import * as React from 'react';
import Classnames from 'classnames';
import { css, keyframes } from 'emotion';
import Star from '../assets/images/star.svg';

interface Props {
  className?: string;
  count?: number | 'infinite';
  fadeout?: number;
}

const baseStyle = css({
  width: 300,
  display: 'inline-block',
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

export const ShinyEffect = ({ className, count = 1, fadeout = 500 }: Props) => {
  const starStyles = [
    css({
      animation: `${starsPulse} 1s ease-in-out ${count}`,
      left: 10,
    }),
    css({
      animation: `${starsPulse} 1s 0.2s ease-in-out ${count}`,
      left: 40,
    }),
    css({
      animation: `${starsPulse} 1s 0.4s ease-in-out ${count}`,
      left: 70,
    }),
  ];

  const [visibility, setVisibility] = React.useState(true);
  const handleSetVisibility = React.useCallback(() => {
    setTimeout(() => setVisibility(false), fadeout);
  }, [fadeout]);

  return (
    <section className={Classnames(baseStyle, className)}>
      <div className={loaderStyle}>
        {[...Array(3)].map((_, i) => (
          <img
            className={Classnames(starStyles[i], !visibility && hiddenStyle)}
            src={Star}
            alt="star"
            onAnimationEnd={handleSetVisibility}
          />
        ))}
      </div>
    </section>
  );
};
