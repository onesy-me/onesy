import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsmodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsmodeFilled'

      short_name='Newsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-720h800v720H80Zm160-160h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80Z"/>
    </Icon>
  );
});

IconMaterialNewsmodeFilled.displayName = 'OnesyIconMaterialNewsmodeFilled';

export default IconMaterialNewsmodeFilled;
