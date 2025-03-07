import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueuePlayNextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextW100Filled'

      short_name='QueuePlayNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-506v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106Zm414 266L770-350q-4-4-4.5-9.5T770-370q5-5 10-5t10 5l109 109q9 9 9 21t-9 21L790-110q-4 4-9.5 4.5T770-110q-5-5-5-10t5-10l110-110Zm-477.76 68q-13.24 0-21.74-8.63-8.5-8.62-8.5-21.37v-50H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v234q0 5.95-4.03 9.98Q819.95-480 814-480h-74q-24.75 0-42.37 17.62Q680-444.75 680-420v154q0 5.95-4.03 9.98Q671.95-252 666-252h-78v50q0 12.75-8.62 21.37Q570.75-172 558-172H402.24Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextW100Filled.displayName = 'OnesyIconMaterialQueuePlayNextW100Filled';

export default IconMaterialQueuePlayNextW100Filled;
