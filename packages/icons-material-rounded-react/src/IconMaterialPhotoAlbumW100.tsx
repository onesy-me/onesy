import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAlbumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbumW100'

      short_name='PhotoAlbum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-576q0-12-10-22t-22-10h-48v208q0 9-7.5 13.5T617-579l-36-21q-8-5-15.5-5t-15.5 5l-36 21q-8 5-15 .5t-7-13.5v-208H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm176-118-52-60q-5-5-12-4.5t-12 5.5l-36 47q-6 8-2 16t14 8h272q9 0 13-8t-1-16l-73-96q-5-6-12-6t-12 6l-87 108ZM240-160v-640 640Zm252-431v-1q0 9 7 13.5t15-.5l36-21q8-5 15.5-5t15.5 5l36 21q8 5 15.5.5T640-592v1q0 8-7.5 12.5t-15.5.5l-36-22q-8-5-15.5-5t-15.5 5l-36 22q-8 4-15-.5t-7-12.5Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbumW100.displayName = 'OnesyIconMaterialPhotoAlbumW100';

export default IconMaterialPhotoAlbumW100;
