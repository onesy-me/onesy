import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiTransportation'

      short_name='EmojiTransportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-254l65-186h350l65 186v254h-80v-60H480v60h-80Zm80-300h320l-28-80H508l-28 80Zm-20 60v120-120Zm60 100q17 0 28.5-11.5T560-260q0-17-11.5-28.5T520-300q-17 0-28.5 11.5T480-260q0 17 11.5 28.5T520-220Zm240 0q17 0 28.5-11.5T800-260q0-17-11.5-28.5T760-300q-17 0-28.5 11.5T720-260q0 17 11.5 28.5T760-220ZM240-400v-80h80v80h-80Zm200-240v-80h80v80h-80ZM240-240v-80h80v80h-80Zm0 160v-80h80v80h-80ZM80-80v-560h200v-240h400v280h-80v-200H360v240H160v480H80Zm380-120h360v-120H460v120Z"/>
    </Icon>
  );
});

IconMaterialEmojiTransportation.displayName = 'OnesyIconMaterialEmojiTransportation';

export default IconMaterialEmojiTransportation;
