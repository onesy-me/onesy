import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeFilled'

      short_name='HMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h80v-160h160v160h80v-400h-80v160H400v-160h-80v400ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeFilled.displayName = 'OnesyIconMaterialHMobiledataBadgeFilled';

export default IconMaterialHMobiledataBadgeFilled;
