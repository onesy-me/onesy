import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheck'

      short_name='PriceCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M11,13V9c0-0.55-0.45-1-1-1H6V6h5V4H8.5V3h-2v1H5C4.45,4,4,4.45,4,5v4c0,0.55,0.45,1,1,1h4v2H4v2h2.5v1h2v-1H10 C10.55,14,11,13.55,11,13z"/><polygon points="19.59,12.52 13.93,18.17 11.1,15.34 9.69,16.76 13.93,21 21,13.93"/></g></g>
    </Icon>
  );
});

IconMaterialPriceCheck.displayName = 'OnesyIconMaterialPriceCheck';

export default IconMaterialPriceCheck;
