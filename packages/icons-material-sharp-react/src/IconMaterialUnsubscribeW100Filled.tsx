import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100Filled'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-486 320-211-16-23-304 200-304-200-16 23 320 211ZM760-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T760-92Zm-86-134h172v-28H674v28Zm-542 14v-536h696v290q-17-5-34-7.5t-34-2.5q-95.27 0-161.64 66.36Q532-335.27 532-240v14q0 7 2 14H132Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100Filled.displayName = 'OnesyIconMaterialUnsubscribeW100Filled';

export default IconMaterialUnsubscribeW100Filled;
