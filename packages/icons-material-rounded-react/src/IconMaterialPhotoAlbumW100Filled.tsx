import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAlbumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumW100Filled'

      short_name='PhotoAlbum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm176-146-52-60q-5-5-12-4.5t-12 5.5l-36 47q-6 8-2 16t14 8h272q9 0 13-8t-1-16l-73-96q-5-6-12-6t-12 6l-87 108Zm44-522v208q0 9 7 13.5t15-.5l36-21q8-5 15.5-5t15.5 5l36 21q8 5 15.5.5T640-592v-208H492Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100Filled.displayName = 'OnesyIconMaterialPhotoAlbumW100Filled';

export default IconMaterialPhotoAlbumW100Filled;
