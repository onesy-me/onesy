import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100Filled'

      short_name='VideoCameraFrontOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M752-160 128-784q-4-4-4.5-9.5T128-804q5-5 10-5t10 5l624 624q4 4 4.5 9.5T772-160q-5 5-10 5t-10-5ZM206-746l488 488q-5 20-20.5 33T636-212H220q-26 0-43-17t-17-43v-416q0-22 13-37.5t33-20.5Zm95 390h248v-2q0-28-35.5-47T425-424q-53 0-88.5 19T301-358v2Zm479-20-84-84v18q0 20-18.5 27.5T645-421L369-697q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h246q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T806-574v188q0 10-9.5 13.5T780-376Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100Filled.displayName = 'OnesyIconMaterialVideoCameraFrontOffW100Filled';

export default IconMaterialVideoCameraFrontOffW100Filled;
