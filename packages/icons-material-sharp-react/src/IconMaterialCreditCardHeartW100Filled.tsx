import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100Filled'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M697-172 585-284q-11-11-15-22.67-4-11.66-4-23.33 0-25.76 18.23-45.88T631-396q22.87 0 35.93 10.5Q680-375 697-358q17-17 30.17-27.5 13.16-10.5 36.3-10.5 29.53 0 47.03 20t17.5 45.77q0 12.07-4.5 24.15Q819-294 809-284L697-172Zm-565-40v-536h696v239q-7-4-13.5-7.5T800-523v-75H160v76h432q-69 30-112 94t-43 144q0 18.92 2.5 36.96T447-212H132Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100Filled.displayName = 'OnesyIconMaterialCreditCardHeartW100Filled';

export default IconMaterialCreditCardHeartW100Filled;
