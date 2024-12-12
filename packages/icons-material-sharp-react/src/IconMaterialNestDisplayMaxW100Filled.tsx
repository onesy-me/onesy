import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDisplayMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayMaxW100Filled'

      short_name='NestDisplayMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-572q11 0 19.5-8.5T508-600q0-11-8.5-19.5T480-628q-11 0-19.5 8.5T452-600q0 11 8.5 19.5T480-572Zm0 346q-97 0-155.5-11T266-266v-40h-93q-26 0-44-19.5T113-371l26-308q2-23 19.5-39t40.5-16h562q23 0 40.5 16t19.5 39l26 308q2 26-16 45.5T787-306h-93v40q0 18-58.5 29T480-226Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayMaxW100Filled.displayName = 'OnesyIconMaterialNestDisplayMaxW100Filled';

export default IconMaterialNestDisplayMaxW100Filled;
