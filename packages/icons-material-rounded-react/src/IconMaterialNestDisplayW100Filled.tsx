import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayW100Filled'

      short_name='NestDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-226q-97 0-155.5-11T266-266v-40h-93q-26 0-44-19.5T113-371l26-308q2-23 19.5-39t40.5-16h562q23 0 40.5 16t19.5 39l26 308q2 26-16 45.5T787-306h-93v40q0 18-58.5 29T480-226Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayW100Filled.displayName = 'OnesyIconMaterialNestDisplayW100Filled';

export default IconMaterialNestDisplayW100Filled;
