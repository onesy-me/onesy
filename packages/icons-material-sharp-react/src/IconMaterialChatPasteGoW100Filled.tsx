import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatPasteGoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoW100Filled'

      short_name='ChatPasteGo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-157-20-19 89-90H586v-28h203l-89-90 20-19 123 123-123 123ZM286-586h308v-28H286v28Zm0 160h188v-28H286v28ZM146-183v-591h588v254h-28q-94 0-160 65.92-66 65.91-66 160.08v28H229l-83 83Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoW100Filled.displayName = 'OnesyIconMaterialChatPasteGoW100Filled';

export default IconMaterialChatPasteGoW100Filled;
