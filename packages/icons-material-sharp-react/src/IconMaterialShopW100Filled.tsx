import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100Filled'

      short_name='Shop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm268-496h160v-80H400v80Zm6 380 206-132-206-132v264Z"/>
    </Icon>
  );
});

IconMaterialShopW100Filled.displayName = 'OnesyIconMaterialShopW100Filled';

export default IconMaterialShopW100Filled;
