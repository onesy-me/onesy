import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardW100'

      short_name='CreditCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-386h640v-122H160v122Zm0 358h640v-282H160v282Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100.displayName = 'OnesyIconMaterialCreditCardW100';

export default IconMaterialCreditCardW100;
