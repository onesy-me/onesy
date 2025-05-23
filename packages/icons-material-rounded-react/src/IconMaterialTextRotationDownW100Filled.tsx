import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownW100Filled'

      short_name='TextRotationDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-212 58-58q4-4 9.5-4.5T322-270q5 5 5 10t-5 10l-71 71q-9 9-21 9t-21-9l-71-71q-4-4-4.5-9.5T138-270q5-5 10-5t10 5l58 58v-550q0-6 4-10t10-4q6 0 10 4t4 10v550Zm278-176v-188l-105-39q-4-2-6.5-5t-2.5-8q0-8 6-11.5t13-1.5l377 144q4 2 6 5t2 7v10q0 4-2.5 7t-6.5 5L427-323q-7 2-13-1.5t-6-11.5q0-5 2-8t7-5l105-39Zm26-10 220-80v-4l-220-84v168Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDownW100Filled.displayName = 'OnesyIconMaterialTextRotationDownW100Filled';

export default IconMaterialTextRotationDownW100Filled;
