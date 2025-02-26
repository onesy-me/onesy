import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareW100Filled'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialCropSquareW100Filled.displayName = 'OnesyIconMaterialCropSquareW100Filled';

export default IconMaterialCropSquareW100Filled;
