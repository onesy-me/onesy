import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkEmailUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadW100Filled'

      short_name='MarkEmailUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-626q-39 0-66.5-27.5T666-720q0-39 27.5-66.5T760-814q39 0 66.5 27.5T854-720q0 39-27.5 66.5T760-626ZM132-212v-536h456q-1 7-1.5 13.5T586-720q0 30 9.5 57t26.5 49l-142 94-304-200-16 22 320 212 161-107q23 22 53.5 34.5T760-546q17 0 34.5-3.5T828-560v348H132Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100Filled.displayName = 'OnesyIconMaterialMarkEmailUnreadW100Filled';

export default IconMaterialMarkEmailUnreadW100Filled;
