import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientFilled'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm240-400v80h80v-80h-80Zm-160 0v80h80v-80h-80Zm80 80v80h80v-80h-80Zm160 0v80h80v-80h-80Zm-320 0v80h80v-80h-80Zm400-80v80h80v80h80v-80h-80v-80h-80ZM280-360v80h-80v80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h-80v80h-80v-80h-80v80h-80v-80h-80Zm480-160v80-80Zm0 160v80-80Z"/>
    </Icon>
  );
});

IconMaterialGradientFilled.displayName = 'OnesyIconMaterialGradientFilled';

export default IconMaterialGradientFilled;
