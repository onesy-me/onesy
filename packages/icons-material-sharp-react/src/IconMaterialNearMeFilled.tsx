import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeFilled'

      short_name='NearMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Z"/>
    </Icon>
  );
});

IconMaterialNearMeFilled.displayName = 'OnesyIconMaterialNearMeFilled';

export default IconMaterialNearMeFilled;
