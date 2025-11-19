import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileSmallW100Filled'

      short_name='TileSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-178h258v178H172Zm358 0v-178h258v178H530ZM172-530v-178h258v178H172Zm358 0v-178h258v178H530Z"/>
    </Icon>
  );
});

IconMaterialTileSmallW100Filled.displayName = 'OnesyIconMaterialTileSmallW100Filled';

export default IconMaterialTileSmallW100Filled;
