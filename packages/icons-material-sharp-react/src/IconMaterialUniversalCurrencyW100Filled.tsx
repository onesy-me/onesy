import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUniversalCurrencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyW100Filled'

      short_name='UniversalCurrency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-252v-456h696v456H132Zm94-154h100q11 0 19.5-8.5T354-434v-62q0-11-8.5-19.5T326-524h-72v-62h100v-28H226v118h100v62H226v28Zm250 50h248v-2q0-32-32.5-49T600-424q-59 0-91.5 17T476-358v2Zm124-140q23 0 38.5-15.5T654-550q0-23-15.5-38.5T600-604q-23 0-38.5 15.5T546-550q0 23 15.5 38.5T600-496Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyW100Filled.displayName = 'OnesyIconMaterialUniversalCurrencyW100Filled';

export default IconMaterialUniversalCurrencyW100Filled;
