import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedW100Filled'

      short_name='BookmarkAdded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-639 131-132q4-5 9.5-5t10.5 5q5 5 5 10t-5 10L697-621q-9 9-21 9t-21-9l-46-46q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l47 47ZM480-296l-144 62q-30 13-57-5t-27-50v-439q0-25 17.5-42.5T312-788h196q14 0 20.5 11.5T530-752q-5 14-7.5 28t-2.5 30q0 69 46.5 118.5T680-521q11 1 19.5 9t8.5 19v204q0 32-27 50t-57 5l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedW100Filled.displayName = 'OnesyIconMaterialBookmarkAddedW100Filled';

export default IconMaterialBookmarkAddedW100Filled;
