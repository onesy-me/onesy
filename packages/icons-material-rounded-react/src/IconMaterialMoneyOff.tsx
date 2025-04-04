import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOff'

      short_name='MoneyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-756v-44q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v42q30 6 56.5 21.5T623-698q11 14 9.5 30.5T617-640q-14 11-30.5 9.5T559-646q-14-17-34-26.5t-43-9.5q-11 0-21.5 3t-20.5 8q-16 7-31.5 1T386-692q-7-16-1-31.5t22-22.5q8-4 16.5-6t16.5-4ZM764-84 608-240q-15 15-41 24.5T520-204v44q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-46q-44-11-77-36.5T310-306q-8-16-3-33t21-25q17-8 33.5-2t25.5 22q15 28 40.5 46t60.5 18q18 0 33-4.5t29-13.5L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialMoneyOff.displayName = 'OnesyIconMaterialMoneyOff';

export default IconMaterialMoneyOff;
