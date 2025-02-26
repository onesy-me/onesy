import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAddOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnW100Filled'

      short_name='ChatAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-626h308v-28H286v28Zm0 160h188v-28H286v28Zm420 280v-120H586v-28h120v-120h28v120h120v28H734v120h-28Zm-560-37v-591h588v254h-28q-94 0-160 65.92-66 65.91-66 160.08v28H229l-83 83Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnW100Filled.displayName = 'OnesyIconMaterialChatAddOnW100Filled';

export default IconMaterialChatAddOnW100Filled;
