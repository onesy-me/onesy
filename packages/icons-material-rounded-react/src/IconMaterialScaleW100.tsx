import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScaleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScaleW100'

      short_name='Scale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-172H206q-14 0-23-9.5t-7-23.5q13-109 77.5-180T426-478v-119q-36-4-74-14t-71.5-28q-33.5-18-59-45T185-750q-5-14 4.5-26t24.5-12h532q15 0 24.5 12.5T775-749q-12 39-37.5 66T679-638q-33 18-71 27.5T534-597v119q108 22 172.5 93T784-205q2 14-7 23.5t-23 9.5H628q-6 0-10-4t-4-10q0-6 4-10t10-4h132q-21-136-100.5-195T480-454q-100 0-179.5 59T200-200h132q6 0 10 4t4 10q0 6-4 10t-10 4Zm148-451q137 0 197.5-46.5T748-760H212q9 44 70 90.5T480-623Zm0 451q-23 0-38.5-15.5T426-226q0-11 4-20.5t12-16.5q7-7 23.5-16t38.5-20l53-24q10-5 17.5 2.5T577-303l-24 52q-11 22-20 39t-16 24q-7 8-16.5 12t-20.5 4Zm0-451Z"/>
    </Icon>
  );
});

IconMaterialScaleW100.displayName = 'OnesyIconMaterialScaleW100';

export default IconMaterialScaleW100;
