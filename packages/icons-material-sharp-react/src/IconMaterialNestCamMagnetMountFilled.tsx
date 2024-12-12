import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamMagnetMountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamMagnetMountFilled'

      short_name='NestCamMagnetMount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M920-308q-33 0-56.5-23.5T840-388v-160q0-34 23.5-57t56.5-23h40v320h-40ZM520-509q0 40-15 76.5T461-367L290-196 7-478l171-172q29-29 65.5-44t76.5-15q84 0 142 58t58 142Zm158 163-42-42 48-48H560v-60h128l-50-50 42-42 120 120-122 122Z"/>
    </Icon>
  );
});

IconMaterialNestCamMagnetMountFilled.displayName = 'OnesyIconMaterialNestCamMagnetMountFilled';

export default IconMaterialNestCamMagnetMountFilled;
