import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-256h188q17 54 61 87t99 33q57 0 101-33t59-87h188v256H132Zm28-28h640v-200H664q-26 55-75 87.5T480-280q-60 0-109-32.5T296-400H160v200Zm534-334-20-20 106-106 20 20-106 106Zm-428 0L160-640l20-20 106 106-20 20Zm200-104v-148h28v148h-28ZM160-200h640-640Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100.displayName = 'OnesyIconMaterialUpcomingW100';

export default IconMaterialUpcomingW100;
