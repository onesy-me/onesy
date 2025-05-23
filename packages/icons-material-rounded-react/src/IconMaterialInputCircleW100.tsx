import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInputCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleW100'

      short_name='InputCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-534v366q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-366l121 119q4 4 9.5 3.5t9.67-4.5q3.83-3.67 3.83-9.33 0-5.67-4-9.67L501-567q-9-9-21-9t-21 9L326-434q-4 4-3.5 9.5t4.67 9.67Q331-411 336-411t9-4l121-119Zm14-266q-134 0-227 93t-93 227q0 34 7 66.68 7 32.68 21 63.32 3 6 2.08 12.05-.91 6.05-5.68 10.68Q180-323 174-324.5q-6-1.5-8-6.5-17-35-25.5-72.27Q132-440.54 132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.4 110.57 74.36 47.02 46.96 74.44 110.45Q828-552.32 828-480.13q0 39.13-9 77.63-9 38.5-26 73.5-2 5-7 5.5t-9-3.5q-5-5-5.5-10.5T773-349q14-31.48 20.5-64.48Q800-446.49 800-480q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialInputCircleW100.displayName = 'OnesyIconMaterialInputCircleW100';

export default IconMaterialInputCircleW100;
