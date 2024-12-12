import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreW100Filled'

      short_name='ExpandMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreW100Filled.displayName = 'OnesyIconMaterialExpandMoreW100Filled';

export default IconMaterialExpandMoreW100Filled;
