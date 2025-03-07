import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardToInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100'

      short_name='ForwardToInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-720H160v448q0 14 9 23t23 9h340q6 0 10 4t4 10q0 6-4 10t-10 4H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v260q0 6-4 10t-10 4q-6 0-10-4t-4-10v-292Zm-640 0v480-174 8-314Zm320 200 320-200v22L496-507q-8 5-16 5t-16-5L160-690v-30l320 200Zm329 308H620q-6 0-10-4t-4-10q0-6 4-10t10-4h190l-80-80q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l92 92q5 5 7 10t2 11q0 5-2 10.5t-7 10.5l-93 93q-4 4-9.5 3.5T730-113q-4-4-4-9t4-9l79-81Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100.displayName = 'OnesyIconMaterialForwardToInboxW100';

export default IconMaterialForwardToInboxW100;
