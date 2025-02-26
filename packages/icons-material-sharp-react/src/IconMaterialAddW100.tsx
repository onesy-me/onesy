import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddW100'

      short_name='Add'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z"/>
    </Icon>
  );
});

IconMaterialAddW100.displayName = 'OnesyIconMaterialAddW100';

export default IconMaterialAddW100;
