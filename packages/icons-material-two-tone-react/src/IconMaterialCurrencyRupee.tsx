import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRupee = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupee'

      short_name='CurrencyRupee'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z"/></g></g>
    </Icon>
  );
});

IconMaterialCurrencyRupee.displayName = 'OnesyIconMaterialCurrencyRupee';

export default IconMaterialCurrencyRupee;
