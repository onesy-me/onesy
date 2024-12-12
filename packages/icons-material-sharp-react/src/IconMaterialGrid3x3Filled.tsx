import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid3x3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Filled'

      short_name='Grid3x3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-160H160v-80h160v-160H160v-80h160v-160h80v160h160v-160h80v160h160v80H640v160h160v80H640v160h-80v-160H400v160h-80Zm80-240h160v-160H400v160Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3Filled.displayName = 'OnesyIconMaterialGrid3x3Filled';

export default IconMaterialGrid3x3Filled;
