import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-680q-6 0-10-4t-4-10q0-6 4-10t10-4h160q6 0 10 4t4 10q0 6-4 10t-10 4H614ZM480-296l-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h194q6 0 10 4t4 10q0 6-4 10t-10 4H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67 155 67q16 7 30.5-3t14.5-27v-215q0-6 4-10t10-4q6 0 10 4t4 10v217q0 32-27 50t-57 5l-144-62Zm0-464H280h240-40Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100.displayName = 'OnesyIconMaterialBookmarkRemoveW100';

export default IconMaterialBookmarkRemoveW100;
