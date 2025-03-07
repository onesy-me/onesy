import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkAsUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadW100'

      short_name='MarkAsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-300q-12-8-20-20.5t-8-27.5v-304q0-9 4.5-16t13.5-12l269-134q13-7 27-7t27 7l263 134q8 3 12 11t6 17h-24L460-789q-7-4-14-3.5t-14 3.5L160-654v354Zm140 128q-26 0-43-17t-17-43v-280q0-26 17-43t43-17h468q26 0 43 17t17 43v280q0 26-17 43t-43 17H300Zm207-220L268-512v280q0 14 9 23t23 9h468q14 0 23-9t9-23v-280L561-392q-13 7-27 7t-27-7Zm41-25 240-121q-5-3-9.5-4.5T768-544H300q-5 0-10 1.5t-10 4.5l240 121q7 4 14 4t14-4Zm252-127H268h532Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100.displayName = 'OnesyIconMaterialMarkAsUnreadW100';

export default IconMaterialMarkAsUnreadW100;
