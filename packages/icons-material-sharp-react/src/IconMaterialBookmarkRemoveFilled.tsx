import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveFilled'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-680H600v-80h240v80ZM200-120v-720h360q-20 30-30 57.5T520-720q0 72 45.5 127T680-524q23 3 40 3t40-3v404L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveFilled.displayName = 'OnesyIconMaterialBookmarkRemoveFilled';

export default IconMaterialBookmarkRemoveFilled;
