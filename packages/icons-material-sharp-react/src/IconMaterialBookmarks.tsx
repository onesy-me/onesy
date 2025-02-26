import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bookmarks'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-720h560v720L400-160 120-40Zm80-122 200-86 200 86v-518H200v518Zm560 2v-680H240v-80h600v760h-80ZM200-680h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarks.displayName = 'OnesyIconMaterialBookmarks';

export default IconMaterialBookmarks;
