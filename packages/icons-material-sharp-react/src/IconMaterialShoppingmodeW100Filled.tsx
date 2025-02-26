import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeW100Filled'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-107 132-438l390-390h332v332L463-107Zm260-556q14.58 0 24.79-9.92Q758-682.83 758-697q0-14.58-10.09-24.79Q737.82-732 723.41-732T699-721.91q-10 10.09-10 24.5t9.92 24.41q9.91 10 24.08 10Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeW100Filled.displayName = 'OnesyIconMaterialShoppingmodeW100Filled';

export default IconMaterialShoppingmodeW100Filled;
