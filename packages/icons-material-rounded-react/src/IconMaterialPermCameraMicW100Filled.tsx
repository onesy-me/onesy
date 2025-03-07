import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermCameraMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100Filled'

      short_name='PermCameraMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H494v-140q70-7 119-55.5T667-485q1-6-3-10.5t-10-4.5q-6 0-10 4t-5 9q-5 62-50.5 104.5T480-340q-63 0-108.5-42.5T321-487q-1-5-5-9t-10-4q-6 0-10 4.5t-3 10.5q5 69 54 117t119 56v140H192Zm288-288q17 0 28.5-11.5T520-500v-160q0-17-11.5-28.5T480-700q-17 0-28.5 11.5T440-660v160q0 17 11.5 28.5T480-460Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100Filled.displayName = 'OnesyIconMaterialPermCameraMicW100Filled';

export default IconMaterialPermCameraMicW100Filled;
