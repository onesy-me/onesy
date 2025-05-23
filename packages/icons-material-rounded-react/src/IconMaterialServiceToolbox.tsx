import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialServiceToolbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolbox'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-720v-40q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v40h28q23 0 43 13t29 35l94 216q3 8 4.5 16t1.5 16v184q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-184q0-8 1.5-16t4.5-16l94-216q9-22 29-35t43-13h28Zm80 0h240v-40H360v40Zm-80 240v-1q0-17 11.5-28.5T320-521q17 0 28.5 11.5T360-481v1h240v-1q0-17 11.5-28.5T640-521q17 0 28.5 11.5T680-481v1h96l-68-160H252l-68 160h96Zm0 80H160v160h640v-160H680v1q0 17-11.5 28.5T640-359q-17 0-28.5-11.5T600-399v-1H360v1q0 17-11.5 28.5T320-359q-17 0-28.5-11.5T280-399v-1Zm200-40Zm0-40Zm0 80Z"/>
    </Icon>
  );
});

IconMaterialServiceToolbox.displayName = 'OnesyIconMaterialServiceToolbox';

export default IconMaterialServiceToolbox;
