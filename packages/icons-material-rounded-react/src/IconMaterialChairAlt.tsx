import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAlt'

      short_name='ChairAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-240q0-33 23.5-56.5T280-480h40v-80h-40q-33 0-56.5-23.5T200-640v-120q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v120q0 33-23.5 56.5T680-560h-40v80h40q33 0 56.5 23.5T760-400v240q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-80H280v80q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160Zm80-480h400v-120H280v120Zm120 160h160v-80H400v80ZM280-320h400v-80H280v80Zm0-320v-120 120Zm0 320v-80 80Z"/>
    </Icon>
  );
});

IconMaterialChairAlt.displayName = 'OnesyIconMaterialChairAlt';

export default IconMaterialChairAlt;
