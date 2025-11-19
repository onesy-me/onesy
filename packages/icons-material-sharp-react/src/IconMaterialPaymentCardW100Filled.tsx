import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentCardW100Filled'

      short_name='PaymentCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-417q0-26 17-43t43-17h576q26 0 43 17t17 43v417q0 26-17 43t-43 17H192Zm48-106h317L391-643H240v325Zm294-273h186v-52H534v52Z"/>
    </Icon>
  );
});

IconMaterialPaymentCardW100Filled.displayName = 'OnesyIconMaterialPaymentCardW100Filled';

export default IconMaterialPaymentCardW100Filled;
