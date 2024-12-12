import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolylineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineFilled'

      short_name='Polyline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80v-100L320-320H120v-240h172l108-124v-196h240v240H468L360-516v126l240 120v-50h240v240H600Z"/>
    </Icon>
  );
});

IconMaterialPolylineFilled.displayName = 'OnesyIconMaterialPolylineFilled';

export default IconMaterialPolylineFilled;
