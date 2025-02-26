import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiPeopleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleFilled'

      short_name='EmojiPeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80v-529q-91-24-145.5-100.5T160-880h80q0 83 53.5 141.5T430-680h100q30 0 56 11t47 32l181 181-56 56-158-158v478h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleFilled.displayName = 'OnesyIconMaterialEmojiPeopleFilled';

export default IconMaterialEmojiPeopleFilled;
