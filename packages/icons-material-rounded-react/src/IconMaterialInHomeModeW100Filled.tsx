import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInHomeModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeW100Filled'

      short_name='InHomeMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m582-172 217-216q4-4 9.5-4t9.5 4q4 4 4 10t-4 10L603-153q-5 5-10 6.5t-11 1.5q-6 0-11-1.5t-10-6.5L459-255q-4-4-4-9.5t4-10.5q4-5 10-4.5t10 4.5l103 103Zm-310-40q-25 0-42.5-17.5T212-272v-324l-92 68q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-252q8-6 17-9t19-3q9 0 18.5 3t17.5 9l342 252q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-25-18-234 233-31-32q-34-34-82-33.5T387-344q-27 27-32 63.5t11 68.5h-94Z"/>
    </Icon>
  );
});

IconMaterialInHomeModeW100Filled.displayName = 'OnesyIconMaterialInHomeModeW100Filled';

export default IconMaterialInHomeModeW100Filled;
