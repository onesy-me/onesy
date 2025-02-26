import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumFilled'

      short_name='DensityMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-320v-80h720v80H120Zm0-320v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumFilled.displayName = 'OnesyIconMaterialDensityMediumFilled';

export default IconMaterialDensityMediumFilled;
