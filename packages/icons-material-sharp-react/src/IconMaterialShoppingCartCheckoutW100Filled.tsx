import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingCartCheckoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartCheckoutW100Filled'

      short_name='ShoppingCartCheckout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-597-19-19 90-90H346v-28h205l-90-90 19-19 123 123-123 123ZM296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM92-826v-28h88l162 340h280l144-260h32L638-486H324l-72 132h466v28H203l107-190-148-310H92Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutW100Filled.displayName = 'OnesyIconMaterialShoppingCartCheckoutW100Filled';

export default IconMaterialShoppingCartCheckoutW100Filled;
