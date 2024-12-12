import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceChatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatW100Filled'

      short_name='VoiceChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-546h28v-28h-28v28Zm100 80h28v-188h-28v188Zm110 80h28v-348h-28v348Zm110-80h28v-188h-28v188Zm100-80h28v-28h-28v28ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatW100Filled.displayName = 'OnesyIconMaterialVoiceChatW100Filled';

export default IconMaterialVoiceChatW100Filled;
