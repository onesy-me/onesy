import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyRupeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeW100Filled'

      short_name='CurrencyRupee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-172 306-416v-44h114q63 0 116-39.5T588-616H266v-28h320q-11-51-57-83.5T420-760H266v-28h428v28H528q33 17 57 48.5t29 67.5h80v28h-78q2 85-58 134.5T420-432h-90l249 260h-39Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeW100Filled.displayName = 'OnesyIconMaterialCurrencyRupeeW100Filled';

export default IconMaterialCurrencyRupeeW100Filled;
