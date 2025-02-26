import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100'

      short_name='Shop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm28-28h640v-440H160v440Zm240-468h160v-80H400v80ZM160-200v-440 440Zm246-88 206-132-206-132v264Z"/>
    </Icon>
  );
});

IconMaterialShopW100.displayName = 'OnesyIconMaterialShopW100';

export default IconMaterialShopW100;
