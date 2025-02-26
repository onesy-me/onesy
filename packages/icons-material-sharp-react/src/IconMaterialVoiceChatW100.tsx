import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatW100'

      short_name='VoiceChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-546h28v-28h-28v28Zm100 80h28v-188h-28v188Zm110 80h28v-348h-28v348Zm110-80h28v-188h-28v188Zm100-80h28v-28h-28v28ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatW100.displayName = 'OnesyIconMaterialVoiceChatW100';

export default IconMaterialVoiceChatW100;
