import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYuanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuanW100Filled'

      short_name='CurrencyYuan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-254H266v-28h193L247-788h34l199 315 199-315h34L501-454h193v28H494v254h-28Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuanW100Filled.displayName = 'OnesyIconMaterialCurrencyYuanW100Filled';

export default IconMaterialCurrencyYuanW100Filled;
