import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100Filled'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m426-216-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm322-22q-6 0-10-4t-4-10v-504q0-12-10-22t-22-10H332q-6 0-10-4t-4-10q0-6 4-10t10-4h370q26 0 43 17t17 43v504q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100Filled.displayName = 'OnesyIconMaterialBookmarksW100Filled';

export default IconMaterialBookmarksW100Filled;
