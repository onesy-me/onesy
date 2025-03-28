import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightAutoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOffW100Filled'

      short_name='NightSightAutoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m374-608-84-86q18-11 37-18t39-11q14-3 22 7.5t3 23.5q-9 20-12.5 41t-4.5 43Zm316 322-47-48q11 0 21.5-1t21.5-3q10-2 17 5.5t3 17.5l-7.5 15q-3.5 7-8.5 14ZM440-146q-122 0-208-86t-86-208q0-50 16-96.5t47-85.5L92-739q-4-4-4.5-9.5T92-759q5-5 10-5t10 5l637 637q4 4 4.5 9.5T749-102q-5 5-10 5t-10-5L622-209q-39 31-85.5 47T440-146Zm205-467-23 70q-2 5-5 7.5t-8 2.5q-8 0-12-6t-2-13l100-301q2-6 6.5-10t11.5-4h14q7 0 12 4t7 10l99 302q2 7-1.5 12.5T832-533q-5 0-8-2t-5-7l-24-71H645Zm9-28h132l-66-201-66 201Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOffW100Filled.displayName = 'OnesyIconMaterialNightSightAutoOffW100Filled';

export default IconMaterialNightSightAutoOffW100Filled;
