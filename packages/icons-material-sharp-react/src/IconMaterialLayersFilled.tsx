import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersFilled'

      short_name='Layers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Z"/>
    </Icon>
  );
});

IconMaterialLayersFilled.displayName = 'OnesyIconMaterialLayersFilled';

export default IconMaterialLayersFilled;
