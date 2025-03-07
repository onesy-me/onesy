import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutputCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputCircleW100Filled'

      short_name='OutputCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m494-208 121-119q3.67-4 9.33-4 5.67 0 9.67 4t4 9.67q0 5.66-4 9.33L501-175q-9 9-21 9t-21-9L326-308q-4-4-3.5-9.5t4.5-9.5q4-4 9-4t9 4l121 119v-366q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v366Zm-14-592q-134 0-227 93t-93 227q0 34 7 66.68 7 32.68 21 63.32 3 6 2.08 12.05-.91 6.05-5.68 10.68Q180-323 174-324.5q-6-1.5-8-6.5-17-35-25.5-72.27Q132-440.54 132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.4 110.57 74.36 47.02 46.96 74.44 110.45Q828-552.32 828-480.13q0 39.13-9 77.63-9 38.5-26 73.5-2 5-7 5.5t-9-3.5q-5-5-5.5-10.5T773-349q14-31.48 20.5-64.48Q800-446.49 800-480q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialOutputCircleW100Filled.displayName = 'OnesyIconMaterialOutputCircleW100Filled';

export default IconMaterialOutputCircleW100Filled;
