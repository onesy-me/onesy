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
      <path d="M200-120v-720h560v720L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmark.displayName = 'OnesyIconMaterialBookmark';

export default IconMaterialBookmark;
