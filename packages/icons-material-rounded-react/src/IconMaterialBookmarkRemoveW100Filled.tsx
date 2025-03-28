import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100Filled'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M614-680q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H614ZM480-296l-144 62q-30 13-57-4.76-27-17.75-27-50.24v-439q0-24.75 17.63-42.38Q287.25-788 312-788h196q13.5 0 20.25 11.5T530-752q-5.38 13.89-7.69 27.77Q520-710.34 520-694q0 69 46.5 118.5T680-521q11 1 19.5 9t8.5 19v204q0 32.49-27 50.24Q654-221 624-234l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100Filled.displayName = 'OnesyIconMaterialBookmarkRemoveW100Filled';

export default IconMaterialBookmarkRemoveW100Filled;
