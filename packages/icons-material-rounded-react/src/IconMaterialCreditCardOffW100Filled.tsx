import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffW100Filled'

      short_name='CreditCardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M823-249 550-522h250v-76H474L324-748h444q26 0 43 17t17 43v416q0 6-1.5 12t-3.5 11ZM160-522h238l-76-76H160v76ZM842-78 708-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-40L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100Filled.displayName = 'OnesyIconMaterialCreditCardOffW100Filled';

export default IconMaterialCreditCardOffW100Filled;
