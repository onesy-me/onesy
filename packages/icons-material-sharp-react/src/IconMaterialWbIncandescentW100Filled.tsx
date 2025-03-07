import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbIncandescentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentW100Filled'

      short_name='WbIncandescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-106v-106h28v106h-28ZM106-466v-28h106v28H106Zm642 0v-28h106v28H748Zm-26 268-74-74 20-20 74 74-20 20Zm-484 0-20-20 74-74 20 20-74 74Zm242-134q-62 0-105-43t-43-105q0-42 21.5-77t58.5-55v-140h136v140q37 20 58.5 55t21.5 77q0 62-43 105t-105 43Zm-40-290q10-3 19.5-4.5T480-628q11 0 20.5 1.5T520-622v-102h-80v102Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentW100Filled.displayName = 'OnesyIconMaterialWbIncandescentW100Filled';

export default IconMaterialWbIncandescentW100Filled;
