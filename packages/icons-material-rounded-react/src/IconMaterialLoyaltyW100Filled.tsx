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
      <path d="M810-395 565-150q-9.14 9-20.57 13.5t-22.68 4.5q-11.25 0-22.5-4.5T479-150L150-478q-9-8-13.5-19.28Q132-508.56 132-521v-246q0-25.16 17.5-43.08Q167-828 193-828h246q12.07 0 23.39 4.87Q473.7-818.25 482-810l328 328q9.39 9.14 13.7 20.57Q828-450 828-438.38q0 11.62-4.3 22.85Q819.39-404.3 810-395ZM262.59-663q14.41 0 24.41-9.92 10-9.91 10-24.08 0-14.58-9.92-24.79Q277.17-732 263-732q-14.58 0-24.79 10.09Q228-711.82 228-697.41T238.09-673q10.09 10 24.5 10ZM542-313l94-99q8-8 12-18.5t4-23.5q0-23-16.39-40.5T596-512q-19.68 0-38.84 10Q538-492 520-466q-18-26-36.96-36T444-512q-23.22 0-39.61 17.5T388-454q0 13 4 23.5t12 18.5l94 99q9 9 22 9t22-9Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyW100Filled.displayName = 'OnesyIconMaterialLoyaltyW100Filled';

export default IconMaterialLoyaltyW100Filled;
