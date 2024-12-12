import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallArtW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallArtW100'

      short_name='WallArt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-536h234l114-114 114 114h234v536H132Zm28-28h640v-480H160v480Zm158-106h332L548-402 448-278l-64-74-66 86Zm352.24-174q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM406-668h148l-74-74-74 74ZM160-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialWallArtW100.displayName = 'OnesyIconMaterialWallArtW100';

export default IconMaterialWallArtW100;
