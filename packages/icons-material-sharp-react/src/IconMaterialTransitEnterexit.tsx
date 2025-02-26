import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexit'

      short_name='TransitEnterexit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexit.displayName = 'OnesyIconMaterialTransitEnterexit';

export default IconMaterialTransitEnterexit;
