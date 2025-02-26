import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImagesearchRoller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRoller'

      short_name='ImagesearchRoller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-40H400v-320h80v-120H80v-320h160v-80h560v240H240v-80h-80v160h400v200h80v320Zm-160-80h80v-160h-80v160ZM320-720h400v-80H320v80Zm160 600h80-80ZM320-720v-80 80Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRoller.displayName = 'OnesyIconMaterialImagesearchRoller';

export default IconMaterialImagesearchRoller;
