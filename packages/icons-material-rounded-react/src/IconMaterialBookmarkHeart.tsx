import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkHeart'

      short_name='BookmarkHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q14 18 39 43t64 61q6 6 13.5 9t15.5 3q8 0 15.5-3t13.5-9q38-35 63-59.5t39-43.5q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648Zm0 408-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkHeart.displayName = 'OnesyIconMaterialBookmarkHeart';

export default IconMaterialBookmarkHeart;
