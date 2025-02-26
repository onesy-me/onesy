import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH5Filled'

      short_name='FormatH5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-80h240v-80H520v-240h320v80H600v80h160q33 0 56.5 23.5T840-440v80q0 33-23.5 56.5T760-280H520Z"/>
    </Icon>
  );
});

IconMaterialFormatH5Filled.displayName = 'OnesyIconMaterialFormatH5Filled';

export default IconMaterialFormatH5Filled;
