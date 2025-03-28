import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAdded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAdded'

      short_name='BookmarkAdded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m713-713 113-113q12-12 28.5-12t28.5 12q12 12 12 28.5T883-769L741-628q-12 12-28 12t-28-12l-57-57q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l28 28ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h200q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760H280v518l200-86 200 86v-238q0-17 11.5-28.5T720-520q17 0 28.5 11.5T760-480v239q0 43-36 66.5t-76 6.5l-168-72Zm0-520H280h240-40Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAdded.displayName = 'OnesyIconMaterialBookmarkAdded';

export default IconMaterialBookmarkAdded;
