import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposureNeg1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1W100Filled'

      short_name='ExposureNeg1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-432H146v-28h228v28Zm286 178v-414l-104 72-16-22 126-88h22v452h-28Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1W100Filled.displayName = 'OnesyIconMaterialExposureNeg1W100Filled';

export default IconMaterialExposureNeg1W100Filled;
