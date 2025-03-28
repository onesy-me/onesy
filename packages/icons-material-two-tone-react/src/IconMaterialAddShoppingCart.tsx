import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddShoppingCart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCart'

      short_name='AddShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.41 4l-3.86 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCart.displayName = 'OnesyIconMaterialAddShoppingCart';

export default IconMaterialAddShoppingCart;
