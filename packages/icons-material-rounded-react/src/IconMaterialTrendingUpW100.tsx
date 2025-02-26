import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpW100'

      short_name='TrendingUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M142-293q-5-5-4.5-10t4.5-9l187-189q17-18 42-18t43 18l95 95q9 9 22 9t23-9l228-225H654q-6 0-10-4t-4-10q0-6 4-10t10-4h144q13 0 21.5 8.5T828-629v144q0 6-4 10t-10 4q-6 0-10-3.5t-4-9.5v-127L573-384q-17 17-42 17t-42-17l-95-95q-9-9-23-9t-23 9L162-293q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpW100.displayName = 'OnesyIconMaterialTrendingUpW100';

export default IconMaterialTrendingUpW100;
