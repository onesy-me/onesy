import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddW100Filled'

      short_name='Add'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z"/>
    </Icon>
  );
});

IconMaterialAddW100Filled.displayName = 'OnesyIconMaterialAddW100Filled';

export default IconMaterialAddW100Filled;
