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
      <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM218-774h500q27 0 40.5 21.5T760-708L654-514q-8 13-20.5 20.5T606-486H324l-50 92q-8 12-.5 26t22.5 14h408q6 0 10 4t4 10q0 6-4 10t-10 4H296q-32 0-47.5-26.5T248-406l62-110-148-310h-56q-6 0-10-4t-4-10q0-6 4-10t10-4h55q9 0 16 4.5t11 12.5l30 63Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartW100Filled.displayName = 'OnesyIconMaterialShoppingCartW100Filled';

export default IconMaterialShoppingCartW100Filled;
