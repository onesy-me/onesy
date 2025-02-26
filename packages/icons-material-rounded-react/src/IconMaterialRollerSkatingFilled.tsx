import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkatingFilled'

      short_name='RollerSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320q-33 0-56.5-23.5T160-400v-440q0-33 23.5-56.5T240-920h160q33 0 56.5 23.5T480-840v40H380q-8 0-14 6t-6 14q0 8 6 14t14 6h100v20q0 5 .5 10t1.5 10H380q-8 0-14 6t-6 14q0 8 6 14t14 6h116q14 23 35.5 39t47.5 24l105 29q52 14 84 56.5t32 96.5v35q0 33-23.5 56.5T720-320H240ZM200-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm560 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-280 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialRollerSkatingFilled.displayName = 'OnesyIconMaterialRollerSkatingFilled';

export default IconMaterialRollerSkatingFilled;
