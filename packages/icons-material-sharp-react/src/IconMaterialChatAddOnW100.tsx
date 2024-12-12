import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatAddOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnW100'

      short_name='ChatAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-223v-591h588v254h-28v-226H174v452h306v28H229l-83 83Zm140-403h308v-28H286v28Zm0 160h188v-28H286v28Zm420 280v-120H586v-28h120v-120h28v120h120v28H734v120h-28ZM174-334v-452 452Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnW100.displayName = 'OnesyIconMaterialChatAddOnW100';

export default IconMaterialChatAddOnW100;
