import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreencastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreencastFilled'

      short_name='Screencast'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm520-160h-80q-17 0-28.5-11.5T560 696q0-17 11.5-28.5T600 656h80q17 0 28.5 11.5T720 696q0 17-11.5 28.5T680 736Zm0-120h-80q-17 0-28.5-11.5T560 576q0-17 11.5-28.5T600 536h80q17 0 28.5 11.5T720 576q0 17-11.5 28.5T680 616Zm-520-80v280h640V496H600q-17 0-28.5-11.5T560 456q0-17 11.5-28.5T600 416h200v-80H480v160q0 17-11.5 28.5T440 536H160Z"/>
    </Icon>
  );
});

IconMaterialScreencastFilled.displayName = 'OnesyIconMaterialScreencastFilled';

export default IconMaterialScreencastFilled;
