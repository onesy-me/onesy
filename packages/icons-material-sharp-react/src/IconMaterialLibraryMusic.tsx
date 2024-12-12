import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusic'

      short_name='LibraryMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusic.displayName = 'OnesyIconMaterialLibraryMusic';

export default IconMaterialLibraryMusic;
