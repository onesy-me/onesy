import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop54Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Filled'

      short_name='Crop54'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Z"/>
    </Icon>
  );
});

IconMaterialCrop54Filled.displayName = 'OnesyIconMaterialCrop54Filled';

export default IconMaterialCrop54Filled;
