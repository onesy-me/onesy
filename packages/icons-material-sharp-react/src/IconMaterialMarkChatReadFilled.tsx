import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadFilled'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-160 553-302l56-56 85 85 170-170 56 57-226 226ZM80-80v-800h800v360H480v280H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadFilled.displayName = 'OnesyIconMaterialMarkChatReadFilled';

export default IconMaterialMarkChatReadFilled;
