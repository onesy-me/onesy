import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyYuan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuan'

      short_name='CurrencyYuan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-280H240v-80h189L200-840h95l185 292 185-292h95L531-480h189v80H520v280h-80Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuan.displayName = 'OnesyIconMaterialCurrencyYuan';

export default IconMaterialCurrencyYuan;
