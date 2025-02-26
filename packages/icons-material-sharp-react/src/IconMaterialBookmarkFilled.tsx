import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFilled'

      short_name='Bookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-720h560v720L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFilled.displayName = 'OnesyIconMaterialBookmarkFilled';

export default IconMaterialBookmarkFilled;
