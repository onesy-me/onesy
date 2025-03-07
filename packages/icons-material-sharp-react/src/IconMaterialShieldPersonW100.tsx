import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldPersonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldPersonW100'

      short_name='ShieldPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-466q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm0-28q36 0 61-25t25-61q0-36-25-61t-61-25q-36 0-61 25t-25 61q0 36 25 61t61 25Zm0 360q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-345Zm0-315-240 89v189q0 62 18.5 119T311-292q38-20 79.5-31t89.5-11q48 0 89.5 11t79.5 31q34-48 52.5-105T720-516v-189l-240-89Zm0 488q-43 0-81.5 9T327-271q31 38 69.5 65.5T480-164q45-14 83-41.5t69-65.5q-33-17-71-26t-81-9Z"/>
    </Icon>
  );
});

IconMaterialShieldPersonW100.displayName = 'OnesyIconMaterialShieldPersonW100';

export default IconMaterialShieldPersonW100;
