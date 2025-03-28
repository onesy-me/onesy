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
      <path d="M360-120v-489q-83-22-135.5-88T162-847q-2-14 10-23.5t28-9.5q16 0 28 8.5t14 23.5q11 72 62 120t126 48h100q30 0 56 11t47 32l153 153q11 11 11 28t-11 28q-11 11-28 11t-28-11L600-558v438q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-200h-80v200q0 17-11.5 28.5T400-80q-17 0-28.5-11.5T360-120Zm120-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleFilled.displayName = 'OnesyIconMaterialEmojiPeopleFilled';

export default IconMaterialEmojiPeopleFilled;
