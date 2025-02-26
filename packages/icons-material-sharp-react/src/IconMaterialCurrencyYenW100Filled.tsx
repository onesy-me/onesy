import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYenW100Filled'

      short_name='CurrencyYen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-144H266v-28h200v-122H266v-28h184L263-788h34l183 289 183-289h34L510-494h184v28H494v122h200v28H494v144h-28Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYenW100Filled.displayName = 'OnesyIconMaterialCurrencyYenW100Filled';

export default IconMaterialCurrencyYenW100Filled;
