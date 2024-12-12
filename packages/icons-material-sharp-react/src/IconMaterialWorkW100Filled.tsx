import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100Filled'

      short_name='Work'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm268-496h160v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialWorkW100Filled.displayName = 'OnesyIconMaterialWorkW100Filled';

export default IconMaterialWorkW100Filled;
