import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGeneratingTokens = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokens'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4q3.35 0 5.675 2.325Q17 8.65 17 12q0 3.35-2.325 5.675Q12.35 20 9 20Zm0-2q2.5 0 4.25-1.75T15 12q0-2.5-1.75-4.25T9 6Q6.5 6 4.75 7.75T3 12q0 2.5 1.75 4.25T9 18Zm0-2.5q.425 0 .713-.288.287-.287.287-.712v-4h1.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q11.575 9 11.25 9h-4.5q-.325 0-.537.212Q6 9.425 6 9.75q0 .325.213.537.212.213.537.213H8v4q0 .425.288.712.287.288.712.288ZM18.55 8l-.8-1.75-1.75-.8q-.275-.125-.275-.45T16 4.55l1.75-.8.8-1.75q.125-.275.45-.275t.45.275l.8 1.75 1.75.8q.275.125.275.45T22 5.45l-1.75.8-.8 1.75q-.125.275-.45.275T18.55 8Zm0 14-.8-1.75-1.75-.8q-.275-.125-.275-.45t.275-.45l1.75-.8.8-1.75q.125-.275.45-.275t.45.275l.8 1.75 1.75.8q.275.125.275.45t-.275.45l-1.75.8-.8 1.75q-.125.275-.45.275T18.55 22ZM9 12Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokens.displayName = 'OnesyIconMaterialGeneratingTokens';

export default IconMaterialGeneratingTokens;
