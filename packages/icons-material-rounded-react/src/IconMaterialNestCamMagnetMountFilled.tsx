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
      <path d="M920-308q-33 0-56.5-23.5T840-388v-160q0-34 23.5-57t56.5-23h40v320h-40Zm-629 79q-15 0-30-5.5T234-252L64-421q-12-12-18-26.5T40-477q0-15 5.5-30T63-534l115-116q29-29 65.5-44t76.5-15q84 0 142 58t58 142q0 40-15 76.5T461-367L347-253q-12 12-26.5 18t-29.5 6Zm387-117-42-42 48-48H560v-60h128l-50-50 42-42 120 120-122 122Z"/>
    </Icon>
  );
});

IconMaterialNestCamMagnetMountFilled.displayName = 'OnesyIconMaterialNestCamMagnetMountFilled';

export default IconMaterialNestCamMagnetMountFilled;
