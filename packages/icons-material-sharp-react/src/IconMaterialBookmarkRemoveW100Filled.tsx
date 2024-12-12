import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100Filled'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-680H600v-28h188v28ZM252-198v-590h296q-14 22-21 45t-7 49q0 69 46.5 118.5T680-521q8 1 14 1t14-1v323l-228-98-228 98Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100Filled.displayName = 'OnesyIconMaterialBookmarkRemoveW100Filled';

export default IconMaterialBookmarkRemoveW100Filled;
