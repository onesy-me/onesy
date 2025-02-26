import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRangeHoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodFilled'

      short_name='RangeHood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m122-480 158-160v-200h400v200l160 160H122ZM80-160v-240h800v240H80Zm320-132h160v-60H400v60Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodFilled.displayName = 'OnesyIconMaterialRangeHoodFilled';

export default IconMaterialRangeHoodFilled;
