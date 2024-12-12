import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownW100Filled'

      short_name='TextRotationDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M230-158 128-260l20-20 68 68v-564h28v564l68-68 20 20-102 102Zm178-158v-30l114-42v-188l-114-42v-30l404 154v28L408-316Zm140-82 220-80v-4l-220-84v168Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDownW100Filled.displayName = 'OnesyIconMaterialTextRotationDownW100Filled';

export default IconMaterialTextRotationDownW100Filled;
