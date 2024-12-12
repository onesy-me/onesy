import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetailsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsW100Filled'

      short_name='Details'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m168-172 312-561 312 561H168Zm48-28h250v-450L216-200Zm278 0h250L494-650v450Z"/>
    </Icon>
  );
});

IconMaterialDetailsW100Filled.displayName = 'OnesyIconMaterialDetailsW100Filled';

export default IconMaterialDetailsW100Filled;
