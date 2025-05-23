import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkAsUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadW100Filled'

      short_name='MarkAsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-300q-12-8-20-20.5t-8-27.5v-304q0-9 4.5-16t13.5-12l269-134q13-7 27-7t27 7l263 134q8 3 12 11t6 17h-24L446-796 160-654v354Zm140 128q-25 0-42.5-17.5T240-232v-280q0-25 17.5-42.5T300-572h468q25 0 42.5 17.5T828-512v280q0 25-17.5 42.5T768-172H300Zm234-213q7 0 14-2t13-5l231-116q4-2 6-5.5t2-7.5q0-8-6.5-12.5T779-534L534-410 289-534q-7-4-14 .5t-7 12.5q0 4 2 7.5t6 5.5l231 116q6 3 13 5t14 2Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100Filled.displayName = 'OnesyIconMaterialMarkAsUnreadW100Filled';

export default IconMaterialMarkAsUnreadW100Filled;
