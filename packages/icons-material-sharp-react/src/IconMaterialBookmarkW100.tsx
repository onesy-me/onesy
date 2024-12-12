import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100'

      short_name='Bookmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-198v-590h456v590l-228-98.33L252-198Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100.displayName = 'OnesyIconMaterialBookmarkW100';

export default IconMaterialBookmarkW100;
