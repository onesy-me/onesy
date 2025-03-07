import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoyaltyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyW100Filled'

      short_name='Loyalty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-290 116-122q8-8 12-18.5t4-23.5q0-23-16.39-40.5T596-512q-19.68 0-38.84 10Q538-492 520-466q-18-26-36.96-36T444-512q-23.22 0-39.61 17.5T388-454q0 13 4 23.5t12 18.5l116 122Zm2 183L132-496v-332h332l390 390-332 331ZM262.59-663q14.41 0 24.41-9.92 10-9.91 10-24.08 0-14.58-9.92-24.79Q277.17-732 263-732q-14.58 0-24.79 10.09Q228-711.82 228-697.41T238.09-673q10.09 10 24.5 10Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyW100Filled.displayName = 'OnesyIconMaterialLoyaltyW100Filled';

export default IconMaterialLoyaltyW100Filled;
