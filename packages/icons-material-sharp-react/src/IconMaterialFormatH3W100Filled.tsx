import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3W100Filled'

      short_name='FormatH3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-306v-348h28v160h212v-160h28v348h-28v-160H200v160h-28Zm348 0v-28h208q14 0 23-9t9-23v-100H600v-28h160v-100q0-14-9-23t-23-9H520v-28h208q24.75 0 42.38 17.62Q788-618.75 788-594v228q0 24.75-17.62 42.37Q752.75-306 728-306H520Z"/>
    </Icon>
  );
});

IconMaterialFormatH3W100Filled.displayName = 'OnesyIconMaterialFormatH3W100Filled';

export default IconMaterialFormatH3W100Filled;
