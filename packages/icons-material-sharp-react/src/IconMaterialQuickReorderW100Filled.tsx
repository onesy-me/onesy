import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReorderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderW100Filled'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M109-212v-28h166v-106H149v-28h126v-106h-84v-28h84v-116l-68-150 26-12 72 158h476l-74-156 26-12 78 168v416H109Zm354-254h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H463q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderW100Filled.displayName = 'OnesyIconMaterialQuickReorderW100Filled';

export default IconMaterialQuickReorderW100Filled;
