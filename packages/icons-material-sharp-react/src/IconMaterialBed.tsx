import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bed'

      short_name='Bed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-360h40v-200h720v200h40v360h-80v-80H160v80H80Zm440-360h240v-120H520v120Zm-320 0h240v-120H200v120Zm-40 200h640v-120H160v120Zm640 0H160h640Z"/>
    </Icon>
  );
});

IconMaterialBed.displayName = 'OnesyIconMaterialBed';

export default IconMaterialBed;
