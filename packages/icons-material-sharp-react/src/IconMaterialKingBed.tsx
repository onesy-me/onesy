import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKingBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBed'

      short_name='KingBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h-40l-26-80H80v-280h80v-200h640v200h80v280h-54l-26 80h-40l-26-80H226l-26 80Zm320-360h200v-120H520v120Zm-280 0h200v-120H240v120Zm-80 200h640v-120H160v120Zm640 0H160h640Z"/>
    </Icon>
  );
});

IconMaterialKingBed.displayName = 'OnesyIconMaterialKingBed';

export default IconMaterialKingBed;
