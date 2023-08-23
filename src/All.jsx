import React from 'react'
import { Overlay } from './Overlay'
import { Test1 } from './Test1'
import { AbsoluteFill, Sequence } from 'remotion'


export const All = () => {
  return (<>
    <Sequence from={35} durationInFrames={30}>
      <Overlay scale1={'1.5'} top1={500} />
    </Sequence >

    <Sequence from={10} durationInFrames={40}>
      <Test1 />
    </Sequence >
    <Sequence from={0} durationInFrames={40}>
      <Overlay scale1={'1'} />
    </Sequence >

  </>)
}

