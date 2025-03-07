import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddW100Filled'

      short_name='BookmarkAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-680h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66ZM480-296l-144 62q-30 13-57-4.76-27-17.75-27-50.24v-439q0-24.75 17.63-42.38Q287.25-788 312-788h196q13.5 0 20.25 11.5T530-752q-5.38 13.89-7.69 27.77Q520-710.34 520-694q0 69 46.5 118.5T680-521q11 1 19.5 9t8.5 19v204q0 32.49-27 50.24Q654-221 624-234l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100Filled.displayName = 'OnesyIconMaterialBookmarkAddW100Filled';

export default IconMaterialBookmarkAddW100Filled;
