import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedFilled'

      short_name='BookmarkAdded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-720h360q-20 30-30 57.5T520-720q0 72 45.5 127T680-524q23 3 40 3t40-3v404L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedFilled.displayName = 'OnesyIconMaterialBookmarkAddedFilled';

export default IconMaterialBookmarkAddedFilled;
