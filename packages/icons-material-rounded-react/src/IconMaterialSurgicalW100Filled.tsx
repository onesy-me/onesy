import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurgicalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalW100Filled'

      short_name='Surgical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M873-213H534q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.59-9.68 3.58-4.5 10.41-4.5h339q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Zm-486-50q-25 26-58.5 38.5T260-212h-24q-8 0-17-.5t-17-2.5q-11-2-17-10.5t-6-19.5q0-7.05 2.5-13.46 2.5-6.41 7.5-11.54l128-128q9-9 21-9t21 9l46 46q7.47 6.84 11.73 15.64 4.27 8.8 4.27 18.58 0 9.78-4 18.85-4 9.07-11 15.93l-19 20Zm91-144q-9 9-21 9t-21-9l-34-34q-9-9-9-21t9-21l245-245q5-5 10-7t11-2q6 0 11 2t9.77 6.77l34.46 34.46Q728-689 730-684t2 11q0 6-2 11t-7 10L478-407Z"/>
    </Icon>
  );
});

IconMaterialSurgicalW100Filled.displayName = 'OnesyIconMaterialSurgicalW100Filled';

export default IconMaterialSurgicalW100Filled;
