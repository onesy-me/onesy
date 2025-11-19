import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessPawn2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessPawn2W100Filled'

      short_name='ChessPawn2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132q7-86 60.5-152.5T408-374q-41-20-64.5-58.5T320-517q0-52 29.5-93.5T428-669q-17-13-26-31.5t-9-39.5q0-36 25.5-61.5T480-827q36 0 61.5 25.5T567-740q0 21-9 39.5T532-669q49 17 78.5 58.5T640-517q0 46-23.5 84.5T552-374q82 23 135.5 89.5T748-132H212Z"/>
    </Icon>
  );
});

IconMaterialChessPawn2W100Filled.displayName = 'OnesyIconMaterialChessPawn2W100Filled';

export default IconMaterialChessPawn2W100Filled;
