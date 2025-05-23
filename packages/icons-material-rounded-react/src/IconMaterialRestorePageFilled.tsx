import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestorePageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageFilled'

      short_name='RestorePage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M388-530q17-18 41-29t51-11q54 0 92 38t38 92q0 54-38 92t-92 38q-36 0-65.5-18T368-375q-6-11-17.5-14.5T328-388q-12 5-16.5 17.5T314-347q24 44 68 70.5t98 26.5q78 0 134-56t56-134q0-78-56-134t-134-56q-38 0-71 14t-59 38v-32q0-13-8.5-21.5T320-640q-13 0-21.5 8.5T290-610v110q0 13 8.5 21.5T320-470h110q13 0 21.5-8.5T460-500q0-13-8.5-21.5T430-530h-42ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialRestorePageFilled.displayName = 'OnesyIconMaterialRestorePageFilled';

export default IconMaterialRestorePageFilled;
