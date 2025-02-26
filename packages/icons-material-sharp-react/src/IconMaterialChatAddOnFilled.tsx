import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnFilled'

      short_name='ChatAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-560 0v-680h640v283q-10-2-20-2.5t-20-.5q-101 0-170.5 70T480-320q0 10 .5 20t2.5 20H240L120-160Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnFilled.displayName = 'OnesyIconMaterialChatAddOnFilled';

export default IconMaterialChatAddOnFilled;
