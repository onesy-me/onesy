import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100Filled'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-238 204-452l22-18 254 196 254-196 22 18-276 214Zm0-138L204-590l276-214 276 214-276 214Z"/>
    </Icon>
  );
});

IconMaterialLayersW100Filled.displayName = 'OnesyIconMaterialLayersW100Filled';

export default IconMaterialLayersW100Filled;
