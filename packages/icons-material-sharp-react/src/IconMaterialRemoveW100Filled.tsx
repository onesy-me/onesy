import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100Filled'

      short_name='Remove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-466v-28h456v28H252Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100Filled.displayName = 'OnesyIconMaterialRemoveW100Filled';

export default IconMaterialRemoveW100Filled;
