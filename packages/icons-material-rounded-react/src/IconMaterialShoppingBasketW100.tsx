import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBasketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketW100'

      short_name='ShoppingBasket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-172q-20 0-36.5-11.5T190-215l-84-295q-4-14 5-26t24-12h187l134-203q5-7 11-10t14-3q8 0 14 3.5t11 10.5l132 202h187q15 0 24.5 12t4.5 26l-86 295q-5 20-21.5 31.5T710-172H248Zm-4-28h472q11 0 19-6.5t11-17.5l82-296H132l82 296q3 11 11 17.5t19 6.5Zm236-132q11 0 19.5-8.5T508-360q0-11-8.5-19.5T480-388q-11 0-19.5 8.5T452-360q0 11 8.5 19.5T480-332ZM356-548h248L480-738 356-548Zm124 188Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100.displayName = 'OnesyIconMaterialShoppingBasketW100';

export default IconMaterialShoppingBasketW100;
