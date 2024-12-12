import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBag'

      short_name='ShoppingBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-640h160q0-66 47-113t113-47q66 0 113 47t47 113h160v640H160Zm80-80h480v-480h-80v120h-80v-120H400v120h-80v-120h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialShoppingBag.displayName = 'OnesyIconMaterialShoppingBag';

export default IconMaterialShoppingBag;
