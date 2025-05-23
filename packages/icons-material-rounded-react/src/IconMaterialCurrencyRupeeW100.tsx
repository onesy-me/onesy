import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRupeeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeW100'

      short_name='CurrencyRupee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M536-176 312-410q-3-3-4.5-6.5t-1.5-8V-438q0-9.35 6.33-15.67Q318.65-460 328-460h92q63 0 116-39.5T588-616H280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h306q-11-51-57-83.5T420-760H280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h400q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H528q33 17 57 48.5t29 67.5h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-64q2 85-58 134.5T420-432h-90l226 236q7 7 3.5 15.5t-13.44 8.5q-3.06 0-5.56-1-2.5-1-4.5-3Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeW100.displayName = 'OnesyIconMaterialCurrencyRupeeW100';

export default IconMaterialCurrencyRupeeW100;
