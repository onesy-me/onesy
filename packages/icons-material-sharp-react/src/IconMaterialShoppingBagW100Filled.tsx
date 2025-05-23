import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100Filled'

      short_name='ShoppingBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-536h134v-26q0-56 39-95t95-39q56 0 95 39t39 95v26h134v536H212Zm162-536h212v-26q0-45-30.5-75.5T480-800q-45 0-75.5 30.5T374-694v26Zm-28 148h28v-120h-28v120Zm240 0h28v-120h-28v120Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100Filled.displayName = 'OnesyIconMaterialShoppingBagW100Filled';

export default IconMaterialShoppingBagW100Filled;
