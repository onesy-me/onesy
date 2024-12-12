import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensitySmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmall'

      short_name='DensitySmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-80h720v80H120Zm0-240v-80h720v80H120Zm0-240v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialDensitySmall.displayName = 'OnesyIconMaterialDensitySmall';

export default IconMaterialDensitySmall;
