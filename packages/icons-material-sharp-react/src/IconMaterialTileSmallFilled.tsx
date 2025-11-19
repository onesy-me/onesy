import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileSmallFilled'

      short_name='TileSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h320v240H120Zm400 0v-240h320v240H520ZM120-520v-240h320v240H120Zm400 0v-240h320v240H520Z"/>
    </Icon>
  );
});

IconMaterialTileSmallFilled.displayName = 'OnesyIconMaterialTileSmallFilled';

export default IconMaterialTileSmallFilled;
