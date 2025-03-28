import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLeftFilled'

      short_name='SplitscreenLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h320v720H120Zm400 0v-720h320v720H520Zm240-640H600v560h160v-560Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLeftFilled.displayName = 'OnesyIconMaterialSplitscreenLeftFilled';

export default IconMaterialSplitscreenLeftFilled;
