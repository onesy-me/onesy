import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkBagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkBagFilled'

      short_name='BookmarkBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-400h40v40h60v-40h40v40h60v-40h40v-240h-60v-80H420v80h-60v240Zm100-240v-40h40v40h-40ZM200-120v-720h560v720L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkBagFilled.displayName = 'OnesyIconMaterialBookmarkBagFilled';

export default IconMaterialBookmarkBagFilled;
