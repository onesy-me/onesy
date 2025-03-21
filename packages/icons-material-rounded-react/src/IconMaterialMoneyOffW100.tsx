import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoneyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffW100'

      short_name='MoneyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-710v-46q0-6 4-10t10-4q6 0 10 4t4 10v46q32 2 58 20t41 46q3 5 1.5 10.5T588-625q-5 3-10.5 1.5T569-630q-13-24-36.5-38.5T482-683q-18 0-35 6t-31 17q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9q14-12 31-19t36-9Zm292 548L606-314q-17 26-48 44t-64 18v46q0 6-4 10t-10 4q-6 0-10-4t-4-10v-48q-44-8-70.5-34T352-357q-2-6-.5-12t7.5-8q5-2 10.5 1t7.5 9q14 37 41.5 62t69.5 25q32 0 57.5-15t40.5-39L162-758q-4-4-4.5-9.5T162-778q5-5 10-5t10 5l596 596q4 4 4.5 9.5T778-162q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffW100.displayName = 'OnesyIconMaterialMoneyOffW100';

export default IconMaterialMoneyOffW100;
