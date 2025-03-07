import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsFilled'

      short_name='Payments'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-520h80v440h680v80H40Zm160-160v-480h720v480H200Zm160-80q0-33-23.5-56.5T280-480v80h80Zm400 0h80v-80q-33 0-56.5 23.5T760-400Zm-200-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM280-640q33 0 56.5-23.5T360-720h-80v80Zm560 0v-80h-80q0 33 23.5 56.5T840-640Z"/>
    </Icon>
  );
});

IconMaterialPaymentsFilled.displayName = 'OnesyIconMaterialPaymentsFilled';

export default IconMaterialPaymentsFilled;
