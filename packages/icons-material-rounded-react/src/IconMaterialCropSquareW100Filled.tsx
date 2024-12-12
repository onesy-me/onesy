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
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialCropSquareW100Filled.displayName = 'OnesyIconMaterialCropSquareW100Filled';

export default IconMaterialCropSquareW100Filled;
