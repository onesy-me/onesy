import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingCartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartW100Filled'

      short_name='ShoppingCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM218-774h578L639-486H324l-72 132h466v28H203l107-190-148-310H92v-28h88l38 80Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartW100Filled.displayName = 'OnesyIconMaterialShoppingCartW100Filled';

export default IconMaterialShoppingCartW100Filled;
