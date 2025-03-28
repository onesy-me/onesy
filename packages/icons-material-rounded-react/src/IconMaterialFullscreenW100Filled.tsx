import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFullscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenW100Filled'

      short_name='Fullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h128q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H202q-12.75 0-21.37-8.63Q172-189.25 172-202v-126q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v128Zm561 0v-128q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v126q0 12.75-8.62 21.37Q771.75-172 759-172H633q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h128ZM200-760v128q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-126q0-12.75 8.63-21.38Q189.25-788 202-788h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H200Zm561 0H633q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h126q12.75 0 21.38 8.62Q789-770.75 789-758v126q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-128Z"/>
    </Icon>
  );
});

IconMaterialFullscreenW100Filled.displayName = 'OnesyIconMaterialFullscreenW100Filled';

export default IconMaterialFullscreenW100Filled;
