import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermCameraMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100'

      short_name='PermCameraMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H588q-6 0-10-4t-4-10q0-6 4-10t10-4h180q12 0 22-10t10-22v-416q0-12-10-22t-22-10H640l-74-80H394l-74 80H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h180q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm288-288q17 0 28.5-11.5T520-500v-160q0-17-11.5-28.5T480-700q-17 0-28.5 11.5T440-660v160q0 17 11.5 28.5T480-460ZM192-200h608-640 32Zm288-140q-63 0-107.5-42.5T321-483q-1-7-4.5-12t-10.5-5q-6 0-10 5t-3 12q6 68 54 116t119 55v126q0 6 4 10t10 4q6 0 10-4t4-10v-126q71-7 119-55t54-116q1-7-3-12t-10-5q-7 0-10.5 5t-4.5 12q-7 58-51.5 100.5T480-340Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100.displayName = 'OnesyIconMaterialPermCameraMicW100';

export default IconMaterialPermCameraMicW100;
