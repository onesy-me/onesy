import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxFilled'

      short_name='Inbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm360-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Z"/>
    </Icon>
  );
});

IconMaterialInboxFilled.displayName = 'OnesyIconMaterialInboxFilled';

export default IconMaterialInboxFilled;
