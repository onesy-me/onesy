import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServices'

      short_name='CleaningServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-480h240v-400h240v400h240v480H120Zm80-80h80v-160h80v160h80v-160h80v160h80v-160h80v160h80v-320H200v320Zm320-400v-320h-80v320h80Zm0 0h-80 80Z"/>
    </Icon>
  );
});

IconMaterialCleaningServices.displayName = 'OnesyIconMaterialCleaningServices';

export default IconMaterialCleaningServices;
