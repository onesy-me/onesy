import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariableAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddW100Filled'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-332q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-236.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h556q12.75 0 21.38 8.62Q788-610.75 788-598q0 8-5 13t-13 5q-45 2-84 18t-71 48q-31 31-47.5 71.5T550-358q0 11-7.2 18.5-7.19 7.5-17.8 7.5H202Zm558 0H654q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H788v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialVariableAddW100Filled.displayName = 'OnesyIconMaterialVariableAddW100Filled';

export default IconMaterialVariableAddW100Filled;
