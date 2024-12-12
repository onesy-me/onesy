import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollectionsBookmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmark'

      short_name='CollectionsBookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm-80 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Zm200 280 100-60 100 60-100-60-100 60Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmark.displayName = 'OnesyIconMaterialCollectionsBookmark';

export default IconMaterialCollectionsBookmark;
