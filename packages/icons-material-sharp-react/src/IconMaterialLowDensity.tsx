import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensity'

      short_name='LowDensity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-400h80v320h560v-560H440v-80h400v720H120Zm0-480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialLowDensity.displayName = 'OnesyIconMaterialLowDensity';

export default IconMaterialLowDensity;
