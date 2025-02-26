import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m426-216-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm0-32 155 67q16 7 30.5-3t14.5-27v-437q0-12-10-22t-22-10H258q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67Zm322 10q-6 0-10-4t-4-10v-504q0-12-10-22t-22-10H332q-6 0-10-4t-4-10q0-6 4-10t10-4h370q26 0 43 17t17 43v504q0 6-4 10t-10 4ZM426-680H226h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100.displayName = 'OnesyIconMaterialBookmarksW100';

export default IconMaterialBookmarksW100;
