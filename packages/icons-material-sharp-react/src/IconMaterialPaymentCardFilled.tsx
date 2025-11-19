import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaymentCardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentCardFilled'

      short_name='PaymentCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm40-120h400L400-680H200v400Zm320-320h240v-80H520v80Z"/>
    </Icon>
  );
});

IconMaterialPaymentCardFilled.displayName = 'OnesyIconMaterialPaymentCardFilled';

export default IconMaterialPaymentCardFilled;
