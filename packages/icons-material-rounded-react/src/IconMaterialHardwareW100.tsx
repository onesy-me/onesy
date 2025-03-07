import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardwareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareW100'

      short_name='Hardware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M454-172q-11 0-19.5-8.5T426-200v-492H298q-14 0-21.5-12t-.5-25q21-28 52-43.5t66-15.5h140q11 0 19.5 8.5T562-760v86l104-104q5-5 10-7.5t11-2.5q7 0 12 4t5 10v228q0 6-5 10t-12 4q-6 0-11-2.5t-10-7.5L562-646v446q0 11-8.5 19.5T534-172h-80Zm0-28h80v-265h-80v265Zm0-294h80v-266H394q-26 0-49.5 10T304-720h150v226Zm40 14Z"/>
    </Icon>
  );
});

IconMaterialHardwareW100.displayName = 'OnesyIconMaterialHardwareW100';

export default IconMaterialHardwareW100;
