import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingCartCheckoutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartCheckoutFilled'

      short_name='ShoppingCartCheckout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM120-800H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h66q11 0 21 6t15 17l159 337h280l145-260q5-10 14-15t20-5q23 0 34.5 19.5t.5 39.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68.5-39t-1.5-79l54-98-144-304Zm367 120H360q-17 0-28.5-11.5T320-720q0-17 11.5-28.5T360-760h127l-36-36q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l104 104q12 12 12 28t-12 28L508-588q-11 11-27.5 11.5T452-588q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutFilled.displayName = 'OnesyIconMaterialShoppingCartCheckoutFilled';

export default IconMaterialShoppingCartCheckoutFilled;
