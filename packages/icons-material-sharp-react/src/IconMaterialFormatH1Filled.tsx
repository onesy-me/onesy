import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1Filled'

      short_name='FormatH1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-400h80v160h160v-160h80v400h-80v-160H280v160h-80Zm480 0v-320h-80v-80h160v400h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatH1Filled.displayName = 'OnesyIconMaterialFormatH1Filled';

export default IconMaterialFormatH1Filled;
