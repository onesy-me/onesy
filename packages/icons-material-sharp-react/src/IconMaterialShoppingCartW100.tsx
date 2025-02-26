import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartW100'

      short_name='ShoppingCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM232-746l110 232h280l127-232H232Zm-14-28h578L639-486H324l-72 132h466v28H203l107-190-148-310H92v-28h88l38 80Zm124 260h280-280Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartW100.displayName = 'OnesyIconMaterialShoppingCartW100';

export default IconMaterialShoppingCartW100;
