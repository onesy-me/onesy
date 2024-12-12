import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingmodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeFilled'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-47 80-446l432-434h400v400L479-47Zm253-593q25 0 42.5-17.5T792-700q0-25-17.5-42.5T732-760q-25 0-42.5 17.5T672-700q0 25 17.5 42.5T732-640Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeFilled.displayName = 'OnesyIconMaterialShoppingmodeFilled';

export default IconMaterialShoppingmodeFilled;
