import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatW100Filled'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-180v-648h696v536H244L132-180Zm134-246h268v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28Z"/>
    </Icon>
  );
});

IconMaterialChatW100Filled.displayName = 'OnesyIconMaterialChatW100Filled';

export default IconMaterialChatW100Filled;
