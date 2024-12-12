import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100'

      short_name='Work'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm28-28h640v-440H160v440Zm240-468h160v-80H400v80ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialWorkW100.displayName = 'OnesyIconMaterialWorkW100';

export default IconMaterialWorkW100;
