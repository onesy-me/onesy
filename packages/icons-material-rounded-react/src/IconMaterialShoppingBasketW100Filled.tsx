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
      <path d="M248-172q-20 0-36.5-11.5T190-215l-84-295q-4-14 5-26t24-12h187l148-224q2-3 5-4.5t6-1.5q3 0 6 1.5t5 4.5l146 224h187q15 0 24.5 12t4.5 26l-86 295q-5 20-21.5 31.5T710-172H248Zm232-160q11 0 19.5-8.5T508-360q0-11-8.5-19.5T480-388q-11 0-19.5 8.5T452-360q0 11 8.5 19.5T480-332ZM356-548h248L480-738 356-548Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100Filled.displayName = 'OnesyIconMaterialShoppingBasketW100Filled';

export default IconMaterialShoppingBasketW100Filled;
