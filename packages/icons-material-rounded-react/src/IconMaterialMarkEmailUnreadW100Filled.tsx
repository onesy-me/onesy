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
      <path d="M760-626q-39 0-66.5-27.5T666-720q0-39 27.5-66.5T760-814q39 0 66.5 27.5T854-720q0 39-27.5 66.5T760-626ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h368q11 0 19 8.5t7 19.5q0 30 9.5 57t26.5 49l-142 94-293-193q-5-3-10.5-2t-8.5 6q-4 5-2.5 10.5t6.5 8.5l291 193q8 5 17 5t17-5l144-96q23 22 53.5 34.5T760-546q8 0 16.5-.5T793-549q14-2 24.5 5.5T828-523v251q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadW100Filled.displayName = 'OnesyIconMaterialMarkEmailUnreadW100Filled';

export default IconMaterialMarkEmailUnreadW100Filled;
