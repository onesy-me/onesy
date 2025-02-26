import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopWindowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsFilled'

      short_name='LaptopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-160v-80h160v-40H80v-560h800v560h-80v40h160v80H0Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsFilled.displayName = 'OnesyIconMaterialLaptopWindowsFilled';

export default IconMaterialLaptopWindowsFilled;
