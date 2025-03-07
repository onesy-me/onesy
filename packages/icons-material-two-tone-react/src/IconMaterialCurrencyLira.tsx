import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyLira = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLira'

      short_name='CurrencyLira'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M9,8.76V3h2v4.51L15,5v2.36l-4,2.51l0.01,2.35L15,9.72v2.36l-4,2.51V19c2.76,0,5-2.24,5-5h2c0,3.87-3.13,7-7,7H9v-5.16 l-3,1.88l0-2.36l3-1.88v-2.36L6,13l0-2.36L9,8.76z"/></g>
    </Icon>
  );
});

IconMaterialCurrencyLira.displayName = 'OnesyIconMaterialCurrencyLira';

export default IconMaterialCurrencyLira;
