import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowPriorityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriorityW100'

      short_name='LowPriority'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-487q0 81 55 137t135 56h59l-62-63q-4-4-4.5-9.5T347-377q5-5 10-5t10 5l75.31 76.21Q451-292 450.5-280t-8.5 21l-75 77q-3.67 5-9.33 5-5.67 0-10.67-5-4-3.67-4-9.33 0-5.67 4-10.67l62-64h-59q-91 0-154.5-64.5T132-487q0-92 63.3-156.5Q258.61-708 350-708h100q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H350q-79.17 0-134.58 56.07Q160-567.87 160-487Zm418 193h236q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H578q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4Zm0-207h236q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H578q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4Zm0-207h236q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H578q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4Z"/>
    </Icon>
  );
});

IconMaterialLowPriorityW100.displayName = 'OnesyIconMaterialLowPriorityW100';

export default IconMaterialLowPriorityW100;
