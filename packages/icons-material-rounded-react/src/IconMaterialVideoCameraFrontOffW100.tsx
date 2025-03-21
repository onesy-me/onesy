import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100'

      short_name='VideoCameraFrontOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M752-160 128-784q-4-4-4.5-9.5T128-804q5-5 10-5t10 5l624 624q4 4 4.5 9.5T772-160q-5 5-10 5t-10-5ZM430-482ZM206-746l26 26h-12q-14 0-23 9t-9 23v416q0 14 9 23t23 9h416q14 0 23-9t9-23v-12l26 26q-5 20-20.57 33T636-212H220q-26 0-43-17t-17-43v-416q0-21.86 13-37.43T206-746Zm95 390v-2q0-28 35.5-47t88.5-19q53 0 88.5 19t35.5 47v2H301Zm395-104v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-294q0-14-9-23t-23-9H342q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T342-748h294q26 0 43 17t17 43v188l84.31-84.31q6.69-6.69 16.19-3.15 9.5 3.54 9.5 13.46v188q0 9.92-9.5 13.46-9.5 3.54-16.19-3.15L696-460Zm-187-97Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100.displayName = 'OnesyIconMaterialVideoCameraFrontOffW100';

export default IconMaterialVideoCameraFrontOffW100;
