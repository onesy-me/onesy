import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBagSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagSpeedW100'

      short_name='ShoppingBagSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m92-272 7-28h167l-7 28H92Zm80-148 7-28h207l-7 28H172Zm569 261 20-162 28-230 11-89-59 481Zm-512 27 3-28h509l59-480H664l-15 120h-28l15-120H424l-15 120h-28l15-120H281l3-28h115l3-26q8-64 45-99t101-35q57 0 92.5 43.5T669-684l-2 16h164l-65 536H229Zm198-536h212l2-16q5-46-23.5-81T544-800q-51 0-79.5 27.5T430-694l-3 26Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagSpeedW100.displayName = 'OnesyIconMaterialShoppingBagSpeedW100';

export default IconMaterialShoppingBagSpeedW100;
