import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatW100'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Zm106-106h268v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28Z"/>
    </Icon>
  );
});

IconMaterialChatW100.displayName = 'OnesyIconMaterialChatW100';

export default IconMaterialChatW100;
