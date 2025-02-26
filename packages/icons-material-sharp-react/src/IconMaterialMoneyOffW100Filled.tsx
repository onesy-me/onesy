import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffW100Filled'

      short_name='MoneyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-619q-12-30-35.5-47T482-683q-18 0-39 7t-35 24l-20-20q15-17 36.5-26.5T466-710v-60h28v60q29 2 59 20.5t47 59.5l-26 11Zm194 467L606-314q-17 26-48 44t-64 18v60h-28v-62q-48-8-75.5-38T346-372l26-10q13 42 41 72t75 30q32 0 57.5-15t40.5-39L152-768l20-20 616 616-20 20Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffW100Filled.displayName = 'OnesyIconMaterialMoneyOffW100Filled';

export default IconMaterialMoneyOffW100Filled;
