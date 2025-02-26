import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkManagerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100Filled'

      short_name='BookmarkManager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-132v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38ZM132-212v-536h247l80 80h369v63L472-252v40H132Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100Filled.displayName = 'OnesyIconMaterialBookmarkManagerW100Filled';

export default IconMaterialBookmarkManagerW100Filled;
