import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyLiraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLiraW100Filled'

      short_name='CurrencyLira'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-172v-201l-120 75v-34l120-75v-155l-120 75v-33l120-76v-192h28v175l160-100v33L414-579v155l160-100v33L414-390v190h26q83 0 148.5-54.5T664-400h29q-9 98-81 163t-172 65h-54Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLiraW100Filled.displayName = 'OnesyIconMaterialCurrencyLiraW100Filled';

export default IconMaterialCurrencyLiraW100Filled;
