import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRupeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeFilled'

      short_name='CurrencyRupee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeFilled.displayName = 'OnesyIconMaterialCurrencyRupeeFilled';

export default IconMaterialCurrencyRupeeFilled;
