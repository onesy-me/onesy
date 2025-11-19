import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileSmallW100'

      short_name='TileSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-178h258v178H172Zm358 0v-178h258v178H530Zm-330-28h202v-122H200v122Zm358 0h202v-122H558v122ZM172-530v-178h258v178H172Zm358 0v-178h258v178H530Zm-330-28h202v-122H200v122Zm101 217Zm358 0ZM301-619Z"/>
    </Icon>
  );
});

IconMaterialTileSmallW100.displayName = 'OnesyIconMaterialTileSmallW100';

export default IconMaterialTileSmallW100;
