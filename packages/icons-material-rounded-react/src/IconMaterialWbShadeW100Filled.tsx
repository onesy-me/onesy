import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbShadeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeW100Filled'

      short_name='WbShade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M767-200 557-410v-4q0-9.92 9.5-13.46Q576-431 583-424l198 198q7 7 3.46 16.5T771-200h-4Zm-210-30v-50l80 80h-50q-12.75 0-21.37-8.63Q557-217.25 557-230Zm-360 0v-350h-8q-9.92 0-13.46-9.5Q172-599 179-606l117-117q9-9 21-9t21 9l117 117q7 7 3.46 16.5T445-580h-8v350q0 12.75-8.63 21.37-8.64 8.63-21.4 8.63H226.76q-12.76 0-21.26-8.63-8.5-8.62-8.5-21.37Zm52-142h136v-208H249v208Z"/>
    </Icon>
  );
});

IconMaterialWbShadeW100Filled.displayName = 'OnesyIconMaterialWbShadeW100Filled';

export default IconMaterialWbShadeW100Filled;
