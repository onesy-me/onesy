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
      <path d="M132-300v-371l314-157 345 176h-61L446-796 160-654v354h-28Zm108 128v-400h588v400H240Zm294-206L268-512v312h532v-312L534-378Zm0-32 266-134H268l266 134Zm266-134H268h532Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadW100.displayName = 'OnesyIconMaterialMarkAsUnreadW100';

export default IconMaterialMarkAsUnreadW100;
