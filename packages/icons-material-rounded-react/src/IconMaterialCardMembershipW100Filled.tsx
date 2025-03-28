import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardMembershipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardMembershipW100Filled'

      short_name='CardMembership'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-828h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H584v113q0 17-14 26t-29 1l-48-23q-6-3-13-3t-13 3l-48 23q-15 8-29-1t-14-26v-113H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17Zm-32 366h640v-76H160v76Z"/>
    </Icon>
  );
});

IconMaterialCardMembershipW100Filled.displayName = 'OnesyIconMaterialCardMembershipW100Filled';

export default IconMaterialCardMembershipW100Filled;
