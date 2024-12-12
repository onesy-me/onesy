import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100Filled'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-118v-590h456v590l-228-98.33L198-118Zm536-120v-550H318v-28h444v578h-28Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100Filled.displayName = 'OnesyIconMaterialBookmarksW100Filled';

export default IconMaterialBookmarksW100Filled;
