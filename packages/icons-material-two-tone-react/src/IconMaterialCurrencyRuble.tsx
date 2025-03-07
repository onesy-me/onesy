import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRuble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRuble'

      short_name='CurrencyRuble'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M13.5,3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04,0,5.5-2.46,5.5-5.5C19,5.46,16.54,3,13.5,3z M13.5,12H9V5h4.5 C15.43,5,17,6.57,17,8.5S15.43,12,13.5,12z"/></g>
    </Icon>
  );
});

IconMaterialCurrencyRuble.displayName = 'OnesyIconMaterialCurrencyRuble';

export default IconMaterialCurrencyRuble;
