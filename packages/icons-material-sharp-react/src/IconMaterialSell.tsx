import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sell'

      short_name='Sell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M513-47 80-480v-400h400l432 434L513-47Zm0-113 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z"/>
    </Icon>
  );
});

IconMaterialSell.displayName = 'OnesyIconMaterialSell';

export default IconMaterialSell;
