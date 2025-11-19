import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInboxTextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxTextFilled'

      short_name='InboxText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-470h400v-80H280v80Zm0-140h400v-80H280v80ZM120-120v-720h720v720H120Zm360-200q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22Z"/>
    </Icon>
  );
});

IconMaterialInboxTextFilled.displayName = 'OnesyIconMaterialInboxTextFilled';

export default IconMaterialInboxTextFilled;
