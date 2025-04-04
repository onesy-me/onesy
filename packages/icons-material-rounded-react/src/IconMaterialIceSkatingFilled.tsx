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
      <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h120v-80h-40q-33 0-56.5-23.5T120-320v-440q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v40H340q-8 0-14 6t-6 14q0 8 6 14t14 6h102v40H340q-8 0-14 6t-6 14q0 8 6 14t14 6h116q14 23 35.5 39t47.5 24l105 29q52 14 84 56.5t32 96.5v35q0 33-23.5 56.5T680-240h-40v80h80q50 0 85-35t35-85q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 83-58.5 141.5T720-80H120Zm200-80h240v-80H320v80Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingFilled.displayName = 'OnesyIconMaterialIceSkatingFilled';

export default IconMaterialIceSkatingFilled;
