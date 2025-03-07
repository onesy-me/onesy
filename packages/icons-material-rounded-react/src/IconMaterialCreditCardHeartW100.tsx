import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-304 21-197 480Zm537 56q-6 0-11-2t-10-7l-91-91q-11-11-15-22.5t-4-23.5q0-26 18-46t47-20q23 0 36 10.5t30 27.5q17-17 30-27.5t36-10.5q30 0 47.5 20t17.5 46q0 12-4.5 24T809-284l-91 91q-5 5-10 7t-11 2ZM160-598h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm32 386q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v140q0 14-11 20.5t-24 1.5q-22-9-46-13.5t-50-4.5q-28 0-54.5 5.5T592-522H160v250q0 12 10 22t22 10h241q6 0 10 4t4 10q0 6-4 10t-10 4H192Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100.displayName = 'OnesyIconMaterialCreditCardHeartW100';

export default IconMaterialCreditCardHeartW100;
