import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shuffle'

      short_name='Shuffle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4L4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z"/>
    </Icon>
  );
});

IconMaterialShuffle.displayName = 'OnesyIconMaterialShuffle';

export default IconMaterialShuffle;
