import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawFilled'

      short_name='Draw'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-17 0-28.5-11.5T160-160v-97q0-16 6-30.5t17-25.5l504-503q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L353-143q-11 11-25.5 17t-30.5 6h-97Zm546-529 54-54-57-57-54 54 57 57ZM560-120q74 0 137-37t63-103q0-32-16-55.5T702-359q-14-10-30-10t-27 12q-11 12-11 29.5t14 27.5q14 11 23 20t9 20q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM360-720q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 26 12 46t31 35q13 11 29 9.5t27-14.5q11-13 10-29t-14-27q-7-5-11-10t-4-10q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28Z"/>
    </Icon>
  );
});

IconMaterialDrawFilled.displayName = 'OnesyIconMaterialDrawFilled';

export default IconMaterialDrawFilled;
