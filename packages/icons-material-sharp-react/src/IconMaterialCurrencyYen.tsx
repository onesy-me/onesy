import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYen'

      short_name='CurrencyYen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-160H240v-80h200v-80H240v-80h163L200-840h95l185 292 185-292h95L557-520h163v80H520v80h200v80H520v160h-80Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYen.displayName = 'OnesyIconMaterialCurrencyYen';

export default IconMaterialCurrencyYen;
