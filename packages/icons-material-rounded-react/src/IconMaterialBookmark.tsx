import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bookmark'

      short_name='Bookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-240-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v519q0 43-36 66.5t-76 6.5l-168-72Zm0-88 200 86v-518H280v518l200-86Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmark.displayName = 'OnesyIconMaterialBookmark';

export default IconMaterialBookmark;
