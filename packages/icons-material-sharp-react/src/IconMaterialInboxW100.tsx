import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxW100'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-140H610q-20 38-54.5 59T480-260q-41 0-75.5-21T350-340H200v140Zm280-88q38 0 69-22t43-58h168v-392H200v392h168q12 36 43 58t69 22Zm-280 88h560-560Z"/>
    </Icon>
  );
});

IconMaterialInboxW100.displayName = 'OnesyIconMaterialInboxW100';

export default IconMaterialInboxW100;
