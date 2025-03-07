import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoyaltyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyW100'

      short_name='Loyalty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-107 132-496v-332h332l390 390-332 331Zm0-40 292-292-362-360H160v292l362 360ZM262.59-663q14.41 0 24.41-9.92 10-9.91 10-24.08 0-14.58-9.92-24.79Q277.17-732 263-732q-14.58 0-24.79 10.09Q228-711.82 228-697.41T238.09-673q10.09 10 24.5 10ZM487-473Zm33 183 116-122q8-8 12-18.5t4-23.5q0-23-16.39-40.5T596-512q-19.68 0-38.84 10Q538-492 520-466q-18-26-36.96-36T444-512q-23.22 0-39.61 17.5T388-454q0 13 4 23.5t12 18.5l116 122Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyW100.displayName = 'OnesyIconMaterialLoyaltyW100';

export default IconMaterialLoyaltyW100;
