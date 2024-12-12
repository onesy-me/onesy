import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopWindows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindows'

      short_name='LaptopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-160v-80h160v-40H80v-560h800v560h-80v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindows.displayName = 'OnesyIconMaterialLaptopWindows';

export default IconMaterialLaptopWindows;
