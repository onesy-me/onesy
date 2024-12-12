import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMedium'

      short_name='DensityMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-320v-80h720v80H120Zm0-320v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialDensityMedium.displayName = 'OnesyIconMaterialDensityMedium';

export default IconMaterialDensityMedium;
