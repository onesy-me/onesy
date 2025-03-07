import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceChangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChangeW100'

      short_name='PriceChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm266-134H280q-6 0-10 4t-4 10q0 6 4 10t10 4h66v26q0 6 4 10t10 4q6 0 10-4t4-10v-26h52q12 0 20-8t8-20v-92q0-12-8-20t-20-8H294v-92h146q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-26q0-6-4-10t-10-4q-6 0-10 4t-4 10v26h-52q-12 0-20 8t-8 20v92q0 12 8 20t20 8h132v92Zm219 45 38-38q4-4 2-8.5t-7-4.5h-76q-5 0-7 4.5t2 8.5l38 38q2 2 5 2t5-2Zm-43-241h76q5 0 7-4.5t-2-8.5l-38-38q-2-2-5-2t-5 2l-38 38q-4 4-2 8.5t7 4.5Z"/>
    </Icon>
  );
});

IconMaterialPriceChangeW100.displayName = 'OnesyIconMaterialPriceChangeW100';

export default IconMaterialPriceChangeW100;
