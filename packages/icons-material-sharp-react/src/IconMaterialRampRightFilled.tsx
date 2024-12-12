import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRampRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRightFilled'

      short_name='RampRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-252q-33 45-79 85.5T258-211l-58-58q30-17 71-47t78.5-71.5q37.5-41.5 64-95T440-600v-87l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z"/>
    </Icon>
  );
});

IconMaterialRampRightFilled.displayName = 'OnesyIconMaterialRampRightFilled';

export default IconMaterialRampRightFilled;
