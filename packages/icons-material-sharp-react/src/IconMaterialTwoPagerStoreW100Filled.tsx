import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTwoPagerStoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoPagerStoreW100Filled'

      short_name='TwoPagerStore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-132v-106h268v106H560Zm-428-80v-536h696v234h-28v-206H494v215h-28v293H132Zm385-54 29-148h296l29 148H517Zm-297-80h186v-28H220v28Zm0-120h186v-28H220v28Zm0-120h186v-28H220v28Zm334 0v-28h186v28H554Z"/>
    </Icon>
  );
});

IconMaterialTwoPagerStoreW100Filled.displayName = 'OnesyIconMaterialTwoPagerStoreW100Filled';

export default IconMaterialTwoPagerStoreW100Filled;
