import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddW100Filled'

      short_name='BookmarkAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-600v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM252-198v-590h296q-14 22-21 45t-7 49q0 69 46.5 118.5T680-521q8.07 1 14.04 1 5.96 0 13.96-1v323l-228-98.33L252-198Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100Filled.displayName = 'OnesyIconMaterialBookmarkAddW100Filled';

export default IconMaterialBookmarkAddW100Filled;
