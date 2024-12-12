import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxW100Filled'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-116q38 0 69-22t43-58h168v-392H200v392h168q12 36 43 58t69 22Z"/>
    </Icon>
  );
});

IconMaterialInboxW100Filled.displayName = 'OnesyIconMaterialInboxW100Filled';

export default IconMaterialInboxW100Filled;
