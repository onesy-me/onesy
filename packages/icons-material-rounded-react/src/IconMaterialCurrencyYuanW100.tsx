import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYuanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuanW100'

      short_name='CurrencyYuan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-186v-240H280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h179L261-766q-5-8-.5-15t12.78-7q3.79 0 6.89 1.84 3.11 1.84 4.83 5.16l195 308 195-308q1.72-3.32 4.83-5.16 3.1-1.84 6.89-1.84 8.28 0 12.78 7t-.5 15L501-454h179q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v240q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuanW100.displayName = 'OnesyIconMaterialCurrencyYuanW100';

export default IconMaterialCurrencyYuanW100;
