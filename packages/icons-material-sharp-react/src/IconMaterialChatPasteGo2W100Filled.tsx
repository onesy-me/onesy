import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatPasteGo2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGo2W100Filled'

      short_name='ChatPasteGo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-157-20-19 89-90H586v-28h203l-89-90 20-19 123 123-123 123Zm-574-26v-591h588v254h-28q-94 0-160 66t-66 160v28H229l-83 83Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGo2W100Filled.displayName = 'OnesyIconMaterialChatPasteGo2W100Filled';

export default IconMaterialChatPasteGo2W100Filled;
