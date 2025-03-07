import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAddOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOn'

      short_name='ChatAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-680h640v283q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialChatAddOn.displayName = 'OnesyIconMaterialChatAddOn';

export default IconMaterialChatAddOn;
