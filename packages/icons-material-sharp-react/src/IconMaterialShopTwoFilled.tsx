import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopTwoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoFilled'

      short_name='ShopTwo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-360 220-140-220-140v280ZM40-80v-520h80v440h680v80H40Zm160-160v-520h200v-160h320v160h200v520H200Zm280-520h160v-80H480v80Z"/>
    </Icon>
  );
});

IconMaterialShopTwoFilled.displayName = 'OnesyIconMaterialShopTwoFilled';

export default IconMaterialShopTwoFilled;
