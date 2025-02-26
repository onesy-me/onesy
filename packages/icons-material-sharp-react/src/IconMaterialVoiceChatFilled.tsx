import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceChatFilled'

      short_name='VoiceChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-520h60v-80h-60v80Zm100 80h60v-240h-60v240Zm110 80h60v-400h-60v400Zm110-80h60v-240h-60v240Zm100-80h60v-80h-60v80ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialVoiceChatFilled.displayName = 'OnesyIconMaterialVoiceChatFilled';

export default IconMaterialVoiceChatFilled;
