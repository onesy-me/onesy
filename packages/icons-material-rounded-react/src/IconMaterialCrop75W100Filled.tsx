import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75W100Filled'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h496q26 0 43 17t17 43v336q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialCrop75W100Filled.displayName = 'OnesyIconMaterialCrop75W100Filled';

export default IconMaterialCrop75W100Filled;
