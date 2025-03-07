import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyPoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyPoundW100Filled'

      short_name='CurrencyPound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M294-172q-11 0-18-7t-7-18q0-7 3-12.5t8-10.5q38-32 65.5-64t27.5-86q0-17-1.5-30.5T365-428h-82q-6 0-10-4t-4-10q0-6 4-10t10-4h61q-35-37-55-76t-20-82q0-81 56.5-137.5T463-808q52 0 94.5 24t68.5 64q3 5 1 10.5t-7 7.5q-5 2-10.5 0t-9.5-7q-23-32-58.5-51.5T463-780q-69 0-117.5 48.5T297-614q0 42 22 79t64 79h140q6 0 10 4t4 10q0 6-4 10t-10 4H395q3 13 4.5 27t1.5 31q0 51-27.5 95T302-200h261q41 0 66-17t38-46q2-4 5-6t8-2q5 0 9 4t4 9q0 38-49.5 62T563-172H294Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPoundW100Filled.displayName = 'OnesyIconMaterialCurrencyPoundW100Filled';

export default IconMaterialCurrencyPoundW100Filled;
