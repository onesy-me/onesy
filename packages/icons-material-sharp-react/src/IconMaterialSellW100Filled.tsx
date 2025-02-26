import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellW100Filled'

      short_name='Sell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-107 132-496v-332h332l390 390-332 331ZM262.59-663q14.41 0 24.41-9.92 10-9.91 10-24.08 0-14.58-9.92-24.79Q277.17-732 263-732q-14.58 0-24.79 10.09Q228-711.82 228-697.41T238.09-673q10.09 10 24.5 10Z"/>
    </Icon>
  );
});

IconMaterialSellW100Filled.displayName = 'OnesyIconMaterialSellW100Filled';

export default IconMaterialSellW100Filled;
