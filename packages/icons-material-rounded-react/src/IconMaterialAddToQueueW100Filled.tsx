import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToQueueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueW100Filled'

      short_name='AddToQueue'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-506v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106ZM192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueW100Filled.displayName = 'OnesyIconMaterialAddToQueueW100Filled';

export default IconMaterialAddToQueueW100Filled;
