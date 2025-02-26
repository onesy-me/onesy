import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImagesearchRollerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRollerFilled'

      short_name='ImagesearchRoller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-40H400v-320h80v-120H80v-320h160v-80h560v240H240v-80h-80v160h400v200h80v320Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRollerFilled.displayName = 'OnesyIconMaterialImagesearchRollerFilled';

export default IconMaterialImagesearchRollerFilled;
