import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoofingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingW100Filled'

      short_name='Roofing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-212q-25 0-42.5-17.5T380-272v-80q0-25 17.5-42.5T440-412h80q25 0 42.5 17.5T580-352v80q0 25-17.5 42.5T520-212h-80ZM120-488q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-252q8-6 17.5-8.5T480-773q9 0 18.5 2.5T516-762l142 105v-60q0-13 9-22t22-9q13 0 22 9t9 22v105l138 102q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5L499-739q-8-6-19-6t-19 6L120-488Z"/>
    </Icon>
  );
});

IconMaterialRoofingW100Filled.displayName = 'OnesyIconMaterialRoofingW100Filled';

export default IconMaterialRoofingW100Filled;
