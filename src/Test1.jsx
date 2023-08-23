import React from 'react'
import { useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from 'remotion'
import './styles.css';
import myImage from './assets/ddd.png';
export const Test1 = () => {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig();
  const disappearBeforeEnd = 75;

  const scale = spring({
    fps,
    frame,
  });

  const out = spring({
    fps,
    frame: frame,
    config: {
      damping: 200,
    },
    durationInFrames: disappearBeforeEnd,
  });
  const outY = interpolate(out, [0, 1], [0, -20]);

  const style1 = {
    fontSize: 100,
    translate: `0 ${outY}px`,
  }

  return (<>
    <button onClick={() => console.log('ddd')}>Hello All</button>

    <img src={myImage} alt='' />
  </>)
}

