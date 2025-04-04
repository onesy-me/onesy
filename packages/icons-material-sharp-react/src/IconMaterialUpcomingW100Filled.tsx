import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100Filled'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-256h188q17 54 61 87t99 33q57 0 101-33t59-87h188v256H132Zm562-362-20-20 106-106 20 20-106 106Zm-428 0L160-640l20-20 106 106-20 20Zm200-104v-148h28v148h-28Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100Filled.displayName = 'OnesyIconMaterialUpcomingW100Filled';

export default IconMaterialUpcomingW100Filled;
