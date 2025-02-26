import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyFrancW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancW100Filled'

      short_name='CurrencyFranc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-172v-120h-80v-28h80v-468h368v28H344v256h300v28H344v156h150v28H344v120h-28Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancW100Filled.displayName = 'OnesyIconMaterialCurrencyFrancW100Filled';

export default IconMaterialCurrencyFrancW100Filled;
