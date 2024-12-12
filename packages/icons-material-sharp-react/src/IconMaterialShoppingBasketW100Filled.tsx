import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBasketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketW100Filled'

      short_name='ShoppingBasket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M203-172 95-548h227l159-241 157 241h227L755-172H203Zm277-160q11 0 19.5-8.5T508-360q0-11-8.5-19.5T480-388q-11 0-19.5 8.5T452-360q0 11 8.5 19.5T480-332ZM356-548h248L480-738 356-548Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100Filled.displayName = 'OnesyIconMaterialShoppingBasketW100Filled';

export default IconMaterialShoppingBasketW100Filled;
