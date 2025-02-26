import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowMinus'

      short_name='EvShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 15-1 29t-3 28q-30-26-67.5-40.5T728-480l64-67q-4-18-9-35t-13-33L432-278q11 13 22.5 25t25.5 23q2 42 17 79t41 67q-14 2-28.5 3T480-80Zm-91-267 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm-26-178 247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm-203 45q0 122 79 211.5T436-163q-72-55-114-137.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Zm400 280v-80h320v80H560ZM280-480Z"/>
    </Icon>
  );
});

IconMaterialEvShadowMinus.displayName = 'OnesyIconMaterialEvShadowMinus';

export default IconMaterialEvShadowMinus;
