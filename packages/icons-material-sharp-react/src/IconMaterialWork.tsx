import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Work'

      short_name='Work'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialWork.displayName = 'OnesyIconMaterialWork';

export default IconMaterialWork;
