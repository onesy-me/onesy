import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveShoppingCartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartW100Filled'

      short_name='RemoveShoppingCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-666v-28h188v28H386Zm-90 540q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM92-826v-28h88l162 340h280l144-260h32L638-486H324l-72 132h466v28H203l107-190-148-310H92Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartW100Filled.displayName = 'OnesyIconMaterialRemoveShoppingCartW100Filled';

export default IconMaterialRemoveShoppingCartW100Filled;
