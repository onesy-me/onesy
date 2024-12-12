import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBasketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketFilled'

      short_name='ShoppingBasket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M161-120 27-600h243l209-311 209 311h245L799-120H161Zm319-160q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketFilled.displayName = 'OnesyIconMaterialShoppingBasketFilled';

export default IconMaterialShoppingBasketFilled;
