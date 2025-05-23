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
      <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L669-440H324l-44 80h480v80H145l119-216-144-304H40Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutFilled.displayName = 'OnesyIconMaterialShoppingCartCheckoutFilled';

export default IconMaterialShoppingCartCheckoutFilled;
