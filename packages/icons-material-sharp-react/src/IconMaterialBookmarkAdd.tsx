import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAdd'

      short_name='BookmarkAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240 200-120v-720h320v80H280v518l200-86 200 86v-278h80v400L480-240ZM280-760h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAdd.displayName = 'OnesyIconMaterialBookmarkAdd';

export default IconMaterialBookmarkAdd;
