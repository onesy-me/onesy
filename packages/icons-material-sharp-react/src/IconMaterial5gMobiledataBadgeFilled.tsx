import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5gMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadgeFilled'

      short_name='5gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-720h880v720H40Zm720-400H640v80h40v80H560v-240h200v-80H480v400h280v-240ZM200-280h240v-240H280v-80h160v-80H200v240h160v80H200v80Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadgeFilled.displayName = 'OnesyIconMaterial5gMobiledataBadgeFilled';

export default IconMaterial5gMobiledataBadgeFilled;
