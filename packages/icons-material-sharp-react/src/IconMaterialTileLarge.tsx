import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TileLarge'

      short_name='TileLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h320v240H120Zm400 0v-240h320v240H520Zm-320-80h160v-80H200v80Zm400 0h160v-80H600v80ZM120-440v-400h720v400H120Zm160 200Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialTileLarge.displayName = 'OnesyIconMaterialTileLarge';

export default IconMaterialTileLarge;
