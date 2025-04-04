import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareW100'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm-32 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCropSquareW100.displayName = 'OnesyIconMaterialCropSquareW100';

export default IconMaterialCropSquareW100;
