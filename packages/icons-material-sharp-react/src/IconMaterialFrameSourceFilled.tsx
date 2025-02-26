import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameSourceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameSourceFilled'

      short_name='FrameSource'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-336 200-480l144-144 56 57-87 87 87 87-56 57Zm272 0-56-57 87-87-87-87 56-57 144 144-144 144ZM120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialFrameSourceFilled.displayName = 'OnesyIconMaterialFrameSourceFilled';

export default IconMaterialFrameSourceFilled;
