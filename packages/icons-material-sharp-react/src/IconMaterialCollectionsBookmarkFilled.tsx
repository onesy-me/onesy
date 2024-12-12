import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollectionsBookmarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkFilled'

      short_name='CollectionsBookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm440-720v280l100-60 100 60v-280H520Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkFilled.displayName = 'OnesyIconMaterialCollectionsBookmarkFilled';

export default IconMaterialCollectionsBookmarkFilled;
