import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrikethroughSW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSW100'

      short_name='StrikethroughS'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M486-192q-62 0-109-32t-71-88l26-11q21 45 59 74t95 29q54 0 102-29t48-91q0-30-7.5-49T606-426h34q11 12 17.5 34t6.5 52q0 71-53.5 109.5T486-192ZM106-506v-28h748v28H106Zm376-264q50 0 85 20t62 62l-25 12q-17-27-47.5-46.5T482-742q-68 0-105 39t-29 89h-28q-9-59 36.5-107.5T482-770Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSW100.displayName = 'OnesyIconMaterialStrikethroughSW100';

export default IconMaterialStrikethroughSW100;
