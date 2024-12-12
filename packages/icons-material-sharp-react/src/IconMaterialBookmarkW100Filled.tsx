import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100Filled'

      short_name='Bookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-198v-590h456v590l-228-98.33L252-198Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100Filled.displayName = 'OnesyIconMaterialBookmarkW100Filled';

export default IconMaterialBookmarkW100Filled;
