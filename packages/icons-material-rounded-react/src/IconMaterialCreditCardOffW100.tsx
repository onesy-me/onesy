import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffW100'

      short_name='CreditCardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m823-249-23-23v-250H550l-76-76h326v-90q0-14-9-23t-23-9H352l-28-28h444q26 0 43 17t17 43v416q0 6-1.5 12t-3.5 11ZM440-480Zm136-16Zm-178-26H160v250q0 12 10 22t22 10h488L398-522ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-48q-12 0-22 10t-10 22v90h162L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L708-212H192Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100.displayName = 'OnesyIconMaterialCreditCardOffW100';

export default IconMaterialCreditCardOffW100;
