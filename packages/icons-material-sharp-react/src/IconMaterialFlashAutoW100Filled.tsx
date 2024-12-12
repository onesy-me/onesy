import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoW100Filled'

      short_name='FlashAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-244v-208H152v-376h259l-63 217h155L252-244Zm330-276 142-360h14l144 360h-32l-44-108H656l-44 108h-30Zm84-134h130l-64-164h-4l-62 164Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoW100Filled.displayName = 'OnesyIconMaterialFlashAutoW100Filled';

export default IconMaterialFlashAutoW100Filled;
