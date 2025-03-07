import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFinanceModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceModeW100Filled'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-516.89v-143.22q0-9.89 7-16.89t17-7q10 0 17 7t7 16.89v143.22q0 9.89-7 16.89t-17 7q-10 0-17-7t-7-16.89ZM522-446v-374q0-10 7-17t17-7q10 0 17 7t7 17v374q0 12-7.36 18-7.35 6-16.5 6-9.14 0-16.64-6t-7.5-18Zm-334 70v-124q0-10 7-17t17-7q10 0 17 7t7 17v124q0 12-7.36 18-7.35 6-16.5 6-9.14 0-16.64-6t-7.5-18Zm27.63 232q-9.63 0-13.13-8.5T206-168l154-154q8-8 19.9-9 11.89-1 21.1 7l121 104 284-284h-86q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h104q12.75 0 21.38 8.62Q854-514.75 854-502v104q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-86L542-200q-8 8-19.9 9-11.89 1-21.1-7L380-302 226-148q-1.85 1.67-4.63 2.83-2.78 1.17-5.74 1.17Z"/>
    </Icon>
  );
});

IconMaterialFinanceModeW100Filled.displayName = 'OnesyIconMaterialFinanceModeW100Filled';

export default IconMaterialFinanceModeW100Filled;
