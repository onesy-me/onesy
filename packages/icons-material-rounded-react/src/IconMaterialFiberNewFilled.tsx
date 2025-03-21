import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewFilled'

      short_name='FiberNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm70-340 95 130q3 5 8 7.5t11 2.5h12q10 0 17-7t7-17v-191q0-11-7-18t-18-7q-11 0-18 7t-7 18v115l-93-130q-4-5-9-7.5t-11-2.5h-12q-11 0-18 7t-7 18v190q0 11 7 18t18 7q11 0 18-7t7-18v-115Zm210 140h115q11 0 18-7t7-18q0-11-7-18t-18-7h-75v-44h75q11 0 18-7t7-18q0-11-7-18t-18-7h-75v-46h75q11 0 18-7t7-18q0-11-7-18t-18-7H400q-8 0-14 6t-6 14v200q0 8 6 14t14 6Zm220 0h160q17 0 28.5-11.5T820-400v-175q0-11-7-18t-18-7q-11 0-18 7t-7 18v155h-44v-115q0-11-7-18t-18-7q-11 0-18 7t-7 18v115h-46v-155q0-11-7-18t-18-7q-11 0-18 7t-7 18v175q0 17 11.5 28.5T620-360Z"/>
    </Icon>
  );
});

IconMaterialFiberNewFilled.displayName = 'OnesyIconMaterialFiberNewFilled';

export default IconMaterialFiberNewFilled;
