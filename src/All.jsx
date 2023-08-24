import React from 'react'
import { Overlay } from './Overlay'
import { Test1 } from './Test1'
import { Sequence } from 'remotion'
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';

export const myCompSchema = z.object({
  propOne: z.string(),
  propTwo: z.number(),
});

export const AA = ({ propOne, propTwo }) => {
  return (<>
    <h1>Vimlesh Kumar {propOne} {propTwo}</h1>
  </>)
}

export const All = ({ propOne, propTwo }) => {
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
    <Sequence from={propTwo} durationInFrames={propTwo}>
      <AA propOne={'hello'} />
    </Sequence >
  </>)
}

