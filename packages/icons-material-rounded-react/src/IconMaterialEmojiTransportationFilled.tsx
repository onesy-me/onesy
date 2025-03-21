import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiTransportationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportationFilled'

      short_name='EmojiTransportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-17 0-28.5-11.5T400-120v-200q0-7 1-14t3-13l42-119q8-24 29-39t47-15h236q26 0 47 15t29 39l42 119q2 6 3 13t1 14v200q0 17-11.5 28.5T840-80q-17 0-28.5-11.5T800-120v-20H480v20q0 17-11.5 28.5T440-80Zm40-300h320l-28-80H508l-28 80Zm40 160q17 0 28.5-11.5T560-260q0-17-11.5-28.5T520-300q-17 0-28.5 11.5T480-260q0 17 11.5 28.5T520-220Zm240 0q17 0 28.5-11.5T800-260q0-17-11.5-28.5T760-300q-17 0-28.5 11.5T720-260q0 17 11.5 28.5T760-220ZM240-400v-80h80v80h-80Zm200-240v-80h80v80h-80ZM240-240v-80h80v80h-80Zm0 160v-80h80v80h-80ZM80-80v-480q0-33 23.5-56.5T160-640h120v-160q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v200h-80v-200H360v240H160v480H80Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportationFilled.displayName = 'OnesyIconMaterialEmojiTransportationFilled';

export default IconMaterialEmojiTransportationFilled;
