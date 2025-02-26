import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicFilled'

      short_name='LibraryMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicFilled.displayName = 'OnesyIconMaterialLibraryMusicFilled';

export default IconMaterialLibraryMusicFilled;
