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
      <path d="M316-186v-106h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-438q0-12.75 8.63-21.38Q333.25-788 346-788h324q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H344v256h286q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H344v156h136q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H344v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancW100Filled.displayName = 'OnesyIconMaterialCurrencyFrancW100Filled';

export default IconMaterialCurrencyFrancW100Filled;
