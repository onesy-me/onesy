import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100Filled'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-394l176-75v78l200-81v96h320v376H132Zm320-132h56v-112h-56v112Zm-160 0h56v-112h-56v112Zm320 0h56v-112h-56v112Zm212-272h-94l36-252h28l30 252Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100Filled.displayName = 'OnesyIconMaterialFactoryW100Filled';

export default IconMaterialFactoryW100Filled;
