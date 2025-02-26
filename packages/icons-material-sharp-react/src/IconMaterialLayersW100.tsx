import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-238 204-452l22-18 254 196 254-196 22 18-276 214Zm0-138L204-590l276-214 276 214-276 214Zm0-214Zm0 178 230-178-230-178-230 178 230 178Z"/>
    </Icon>
  );
});

IconMaterialLayersW100.displayName = 'OnesyIconMaterialLayersW100';

export default IconMaterialLayersW100;
