import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4Filled'

      short_name='FormatH4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm600 0v-120H520v-280h80v200h120v-200h80v200h80v80h-80v120h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatH4Filled.displayName = 'OnesyIconMaterialFormatH4Filled';

export default IconMaterialFormatH4Filled;
