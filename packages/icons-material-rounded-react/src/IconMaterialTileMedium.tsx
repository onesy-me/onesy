import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileMedium'

      short_name='TileMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-160q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v160q0 17-11.5 28.5T400-200H160q-17 0-28.5-11.5T120-240Zm400 0v-160q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H560q-17 0-28.5-11.5T520-240ZM120-560v-160q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720v160q0 17-11.5 28.5T800-520H160q-17 0-28.5-11.5T120-560Zm80 280h160v-80H200v80Zm400 0h160v-80H600v80Zm-320-40Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialTileMedium.displayName = 'OnesyIconMaterialTileMedium';

export default IconMaterialTileMedium;
