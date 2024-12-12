import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardW100Filled'

      short_name='CreditCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-310h640v-76H160v76Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100Filled.displayName = 'OnesyIconMaterialCreditCardW100Filled';

export default IconMaterialCreditCardW100Filled;
