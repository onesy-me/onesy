import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100Filled'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-292q-26 0-43-17t-17-43v-256q0-26 17-43t43-17h496q26 0 43 17t17 43v256q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100Filled.displayName = 'OnesyIconMaterialCrop32W100Filled';

export default IconMaterialCrop32W100Filled;
