import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendMoneyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendMoneyFilled'

      short_name='SendMoney'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-480q0 68 34 124.5t91 86.5q14 8 20.5 23t.5 30q-6 16-21 23t-29-1Q98-234 49-309.5T0-480q0-94 47.5-169T172-764q14-8 29.5-1.5T224-743q7 14 1 29t-20 23q-57 30-91 86.5T80-480Zm480 320q-133 0-226.5-93.5T240-480q0-133 93.5-226.5T560-800q56 0 106 18t91 50q13 10 13 26t-12 28q-11 11-27.5 12t-30.5-9q-30-22-65.5-33.5T560-720q-100 0-170 70t-70 170q0 100 70 170t170 70q39 0 74.5-11.5T700-285q14-10 30.5-9t27.5 12q12 12 12 28t-13 26q-41 32-91 50t-106 18Zm248-280H560q-17 0-28.5-11.5T520-480q0-17 11.5-28.5T560-520h248l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L828-348q-11 11-28 11t-28-11q-11-11-11-28t11-28l36-36Z"/>
    </Icon>
  );
});

IconMaterialSendMoneyFilled.displayName = 'OnesyIconMaterialSendMoneyFilled';

export default IconMaterialSendMoneyFilled;
