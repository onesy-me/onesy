import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomInMapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMapFilled'

      short_name='ZoomInMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m156-100-56-56 124-124H120v-80h240v240h-80v-104L156-100Zm648 0L680-224v104h-80v-240h240v80H736l124 124-56 56ZM120-600v-80h104L100-804l56-56 124 124v-104h80v240H120Zm480 0v-240h80v104l124-124 56 56-124 124h104v80H600Z"/>
    </Icon>
  );
});

IconMaterialZoomInMapFilled.displayName = 'OnesyIconMaterialZoomInMapFilled';

export default IconMaterialZoomInMapFilled;
