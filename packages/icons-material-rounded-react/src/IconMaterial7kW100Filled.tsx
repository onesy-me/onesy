import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial7kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kW100Filled'

      short_name='7k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-472 94 92q2 2 10 4 10 0 13.5-9t-3.5-16l-84-81 85-79q7-6 3-14.5t-13-8.5q-2 0-4.5 1t-4.5 3l-96 90v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-82Zm-144-84-56 161q-2 7 1.5 13t11.5 6q5 0 8-2.5t5-7.5l58-166q5-12-2.5-22T404-584H294q-6 0-10 4t-4 10q0 6 4 10t10 4h104ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial7kW100Filled.displayName = 'OnesyIconMaterial7kW100Filled';

export default IconMaterial7kW100Filled;
