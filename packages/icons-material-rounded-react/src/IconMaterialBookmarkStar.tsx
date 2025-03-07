import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkStar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStar'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-455 51 31q11 7 21.5-1t7.5-21l-13-58 44-38q10-9 6.5-21T580-577l-58-5-24-55q-5-12-18-12t-18 12l-24 55-58 5q-14 2-17.5 14t6.5 21l44 38-13 58q-3 13 7.5 21t21.5 1l51-31Zm0 215-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStar.displayName = 'OnesyIconMaterialBookmarkStar';

export default IconMaterialBookmarkStar;
