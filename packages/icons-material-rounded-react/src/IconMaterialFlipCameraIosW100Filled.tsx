import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipCameraIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraIosW100Filled'

      short_name='FlipCameraIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm442-290q-4 71-46 124.5T480-284q-9 0-18-1.5t-18-3.5q-6-1-12 1t-8 7q-2 5 .5 10t7.5 7q11 5 23.5 6.5T480-256q79 0 129.5-61.5T662-462l36 33q5 4 10.5 3.5t9.5-4.5q5-5 5-10t-5-10l-47-47q-9-9-21-9t-21 9l-47 47q-5 5-5 10t5 10q5 5 10 5t10-5l32-32Zm-336 44-36-33q-5-4-10.5-3.5T242-450q-5 5-5 10t5 10l47 47q9 9 21 9t21-9l47-47q5-5 5-10t-5-10q-5-5-10-5t-10 5l-32 32q4-71 46-124.5T480-596q9 0 18 1.5t17 3.5q6 2 12.5 0t8.5-8q2-5 0-10t-7-7q-12-3-24-5.5t-25-2.5q-79 0-129.5 61.5T298-418Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraIosW100Filled.displayName = 'OnesyIconMaterialFlipCameraIosW100Filled';

export default IconMaterialFlipCameraIosW100Filled;
