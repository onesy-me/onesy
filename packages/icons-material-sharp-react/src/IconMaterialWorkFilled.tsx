import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkFilled'

      short_name='Work'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialWorkFilled.displayName = 'OnesyIconMaterialWorkFilled';

export default IconMaterialWorkFilled;
