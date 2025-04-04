import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAlbum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbum'

      short_name='PhotoAlbum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v245q0 12-10 17.5t-20-.5l-49-30q-10-6-20.5-6t-20.5 6l-49 30q-10 6-20.5.5T440-555v-245H240v640Zm200-120-49-66q-6-8-16-8t-16 8l-55 74q-8 10-2 21t18 11h320q12 0 18-11t-2-21l-95-127q-6-8-16-8t-16 8l-89 119ZM240-160v-640 640Zm200-395q0 12 10.5 17.5t20.5-.5l49-30q10-6 20.5-6t20.5 6l49 30q10 6 20 .5t10-17.5q0 12-10 17.5t-20-.5l-49-30q-10-6-20.5-6t-20.5 6l-49 30q-10 6-20.5.5T440-555Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbum.displayName = 'OnesyIconMaterialPhotoAlbum';

export default IconMaterialPhotoAlbum;
