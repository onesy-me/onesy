import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityW100'

      short_name='Security'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q97-30 162-118.5T718-480H480v-314l-240 89v206q0 8 2 19h238v316Z"/>
    </Icon>
  );
});

IconMaterialSecurityW100.displayName = 'OnesyIconMaterialSecurityW100';

export default IconMaterialSecurityW100;
