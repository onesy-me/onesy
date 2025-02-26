import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingFilled'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h160v-80H120v-600h320v120H320v40h122v40H320v40h136q14 23 35.5 39t47.5 24l221 61v236H640v80h80q50 0 85-35t35-85h80q0 83-58.5 141.5T720-80H80Zm240-80h240v-80H320v80Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingFilled.displayName = 'OnesyIconMaterialIceSkatingFilled';

export default IconMaterialIceSkatingFilled;
