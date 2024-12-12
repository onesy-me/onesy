import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChat'

      short_name='VoiceChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-520h60v-80h-60v80Zm100 80h60v-240h-60v240Zm110 80h60v-400h-60v400Zm110-80h60v-240h-60v240Zm100-80h60v-80h-60v80ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVoiceChat.displayName = 'OnesyIconMaterialVoiceChat';

export default IconMaterialVoiceChat;
