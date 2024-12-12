import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewCompactFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactFilled'

      short_name='ViewCompact'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-170v-620 620ZM80-610v-180h170v180H80Zm210 0v-180h170v180H290Zm210 0v-180h170v180H500Zm210 0v-180h170v180H710Zm0 220v-180h170v180H710Zm-210 0v-180h170v180H500Zm-210 0v-180h170v180H290Zm-210 0v-180h170v180H80Zm630 220v-180h170v180H710Zm-210 0v-180h170v180H500Zm-210 0v-180h170v180H290Zm-210 0v-180h170v180H80Z"/>
    </Icon>
  );
});

IconMaterialViewCompactFilled.displayName = 'OnesyIconMaterialViewCompactFilled';

export default IconMaterialViewCompactFilled;
