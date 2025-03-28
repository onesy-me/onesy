import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnsubscribeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100'

      short_name='Unsubscribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v205q0 6-4 10t-10 4q-6 0-10-4t-4-10v-214L497-497q-4 2-8 3.5t-9 1.5q-5 0-9-1.5t-8-3.5L160-697v425q0 14 9 23t23 9h326q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm288-308 304-200H176l304 200ZM160-240v-228 3-232 8-26 2-7 8-3 26-8 457ZM760-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T760-92Zm-72-134h144q6 0 10-4t4-10q0-6-4-10t-10-4H688q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100.displayName = 'OnesyIconMaterialUnsubscribeW100';

export default IconMaterialUnsubscribeW100;
